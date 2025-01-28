import fs from 'fs';
import path from 'path';
import { xml2js, js2xml } from 'xml-js';
import prettier from 'prettier';

interface Options {
  inputDir: string;
  outputDir: string;
  iconNameFormatter?: (name: string) => string;
}

const defaultFormatter = (name: string) =>
  name
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toUpperCase())
    .replace(/\.svg$/i, '');

function convertSvgToReact({
  inputDir,
  outputDir,
  iconNameFormatter = defaultFormatter,
}: Options) {
  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory "${inputDir}" does not exist.`);
    return;
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs
    .readdirSync(inputDir)
    .filter((file) => file.endsWith('.svg'));

  files.forEach(async (file) => {
    const filePath = path.join(inputDir, file);
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const parsedSvg = xml2js(svgContent, { compact: true });

    function replaceAttributes(element: any) {
      if (element._attributes?.fill) {
        element._attributes.fill = 'currentColor';
      }
      if (element._attributes?.stroke) {
        element._attributes.stroke = 'currentColor';
      }
      if (element.elements) {
        element.elements.forEach(replaceAttributes);
      }
    }

    replaceAttributes(parsedSvg);

    const svgAttributes = (parsedSvg as any).svg._attributes || {};
    svgAttributes.width = '1em';
    svgAttributes.height = '1em';
    svgAttributes.xmlns = svgAttributes.xmlns || 'http://www.w3.org/2000/svg';

    // Modify the formatted SVG to append props at the end of the attributes
    const formattedSvg = js2xml(parsedSvg, { compact: true })
      .replace('<svg ', '<svg {...props} ')
      .replace(
        '<svg ',
        `<svg ${Object.entries(svgAttributes)
          .map(([key, value]) => `${key}="${value}"`)
          .join(' ')} {...props} `
      );

    const iconName = iconNameFormatter(file);

    const componentCode = `
import React from 'react';
import { SVGProps } from 'react';

const ${iconName} = (props: SVGProps<SVGSVGElement>) => (
  ${formattedSvg}
);

export default ${iconName};
`;

    // Format the output with Prettier
    const prettierConfig = (await prettier.resolveConfig(process.cwd())) || {};
    const formattedCode = await prettier.format(componentCode.trim(), {
      ...prettierConfig,
      parser: 'typescript',
    });

    const outputFilePath = path.join(outputDir, `${iconName}.tsx`);
    fs.writeFileSync(outputFilePath, formattedCode);
    console.log(`Converted ${file} to ${iconName}.tsx`);
  });
}

// Usage
convertSvgToReact({
  inputDir: './icons', // Directory containing SVG files
  outputDir: './src', // Output directory for React components
});

import fs from 'node:fs/promises';
import path from 'node:path';
import prettier from 'prettier';

export const format = async (file: string, config = '@u3u/prettier-config') => {
  const filepath = path.resolve('test/__fixtures__', file);
  const options = await prettier.resolveConfig('', { config: require.resolve(config) });

  const info = await prettier.getFileInfo(filepath, {
    // https://github.com/prettier/prettier-vscode/blob/d5ac67aa66822641491039a53dbe6388e5cd2594/src/PrettierEditService.ts#L420
    plugins: options?.plugins?.filter((item): item is string => typeof item === 'string'),
    resolveConfig: true,
  });

  console.log(file, info);

  const buffer = await fs.readFile(filepath);
  const code = buffer.toString('utf8');

  const result = await prettier.format(code, {
    ...options,
    filepath,
    parser: info.inferredParser || undefined,
  });

  return result;
};

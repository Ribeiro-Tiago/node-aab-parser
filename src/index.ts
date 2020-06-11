import bundletool from 'bundletool';
import { parse as xmlParser } from 'fast-xml-parser';

import { validateInput } from './validation';
import { PermissionItem } from './types';

export default async (inputFile: string) => {
  validateInput(inputFile);

  const { error, output } = await bundletool('dump', [
    'manifest',
    '--bundle',
    inputFile,
  ]);

  if (error) {
    throw error;
  }

  const parsed = xmlParser(output.toString().replace(/,/gm, ''), {
    allowBooleanAttributes: true,
    parseTrueNumberOnly: false,
    parseAttributeValue: true,
    parseNodeValue: true,
    ignoreNameSpace: false,
    ignoreAttributes: false,
    arrayMode: true,
  });

  const manifest = parsed.manifest[0];
  const usesSdk = manifest['uses-sdk'][0];
  const permisions = manifest['uses-permission'];

  return {
    compiledSdkVersion: manifest['@_android:compileSdkVersion'],
    compiledSdkVersionCodename: manifest['@_android:compileSdkVersionCodename'],
    minSdkVersion: usesSdk['@_android:minSdkVersion'],
    targetSdkVersion: usesSdk['@_android:targetSdkVersion'],
    versionCode: manifest['@_android:versionCode'],
    verionName: manifest['@_android:versionName'],
    packageName: manifest['@_package'],
    permissions: permisions.map(
      (item: PermissionItem) => item['@_android:name']
    ),
  };
};

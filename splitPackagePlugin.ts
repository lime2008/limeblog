export default function splitPackagePlugin() {
    return {
      name: 'split-package-plugin',
      resolveId(source : any) {
        if (source === 'config.ts') {
          return source;
        }
        return null;
      },
    };
  }
import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';
import {reactOutputTarget as react} from '@stencil/react-output-target';
import {angularOutputTarget} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'component-library',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@company/component-library',
      directivesProxyFile: '../component-library-angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../component-library-angular/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
    react({
      componentCorePackage: '@company/component-library',
      proxiesFile: '../component-library-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
      generateTypeDeclarations: true
    },
    {
      type: 'docs-readme',
    }
  ],
  plugins: [sass({injectGlobalPaths: ['src/global/variables.scss']})]
};

cd packages/component-library

OS=$(uname)

node_modules/.bin/stencil generate $1 <<EOF
Enter
EOF

COMPONENTS_FOLDER="src/components"

mv "$COMPONENTS_FOLDER/$1/test/$1.spec.tsx" "$COMPONENTS_FOLDER/$1/"
rm -rf "$COMPONENTS_FOLDER/$1/test"

mv "$COMPONENTS_FOLDER/$1/$1.css" "$COMPONENTS_FOLDER/$1/$1.scss"

if [ "$OS" = 'Darwin' ]; then
  sed -i "" 's/shadow: true/shadow: false/' "$COMPONENTS_FOLDER/$1/$1.tsx"
  sed -i "" 's/'$1'.css/'$1'.scss/' "$COMPONENTS_FOLDER/$1/$1.tsx"
  sed -i "" "s/from '..\/$1/from '.\/$1/" "$COMPONENTS_FOLDER/$1/$1.spec.tsx"
else
  sed -i 's/shadow: true/shadow: false/' "$COMPONENTS_FOLDER/$1/$1.tsx"
  sed -i 's/'$1'.css/'$1'.scss/' "$COMPONENTS_FOLDER/$1/$1.tsx"
  sed -i "s/from '..\/$1/from '.\/$1/" "$COMPONENTS_FOLDER/$1/$1.spec.tsx"
fi



STORIES_FILENAME="$COMPONENTS_FOLDER/$1/$1.stories.mdx"

touch $STORIES_FILENAME

cat <<EOF >>$STORIES_FILENAME
import {Meta, Story, Source} from '@storybook/addon-docs';
import Props from './readme.md';

<Meta title="Components/Sample"/>

<Props/>

export const SampleStory = (args) => \`<$1></$1>\`;

<Story name="Sample" args={{}}>
  {SampleStory.bind({})}
</Story>

<Source id={'components-sample--sample'} dark/>
EOF

cd ..

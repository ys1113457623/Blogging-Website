import {defineConfig} from 'sanity'
import moduleName from 'module'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'
import { getDefaultDocumentNode } from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
  basePath:"/studio",
  name: 'youknowme_content_studio',
  title: 'youknowme content studio',

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode:getDefaultDocumentNode
  }), visionTool()],

  studio:{
    components:{
      logo:Logo,
      navbar: StudioNavbar
    }
  },
  schema: {
    types: schemaTypes,
  },
  theme: myTheme
})

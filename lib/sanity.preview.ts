"use client"

import {  definePreview  } from 'next-sanity/preview';
import { projectID , dataset} from './sanity.client'

function onPublicAccessOnly(){
    throw new Error('You must be signed in to access this resource');
}

if(!projectID || !dataset) {
    throw new Error('Missing projectId or dataset. Check your sanity.json');
}

export const usePreview = definePreview({projectId:projectID, dataset, onPublicAccessOnly})
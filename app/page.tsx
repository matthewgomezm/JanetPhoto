import fs from 'fs';
import path from 'path';
import Image from 'next/image';

async functio getImages(): Promise<string[]> {
  const galleryDir = path.jion(process.cwd(), 'public/gallery');

  if(!fs.existsSync(galleryDir)) {
    return [];
  }

  const files = fs.readdirSync(galleryDir);
  const images = filenames.filter
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

async function getGalleryImages(): Promise<string[]> {
  const galleryDir = path.join(process.cwd(), 'public/gallery');
  
  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  const filenames = fs.readdirSync(galleryDir);
  const images = filenames.filter((file) => 
    /\.(jpeg|jpg|png|webp)$/i.test(file)
  );

  return images.map(name => `/gallery/${name}`);
}

export default async function Home() {
  const images = await getGalleryImages();

  return (
    <main>
      <section className="gallery">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <Image 
              src={src} 
              alt={`Portfolio shot ${index+1}`} 
              width={500} 
              height={500} 
              className="gallery-img"
              style={{ width:'100%', height:'100%', objectFit:'cover' }}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
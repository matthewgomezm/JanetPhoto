import Image from 'next/image';

export default function About() {
  return (
    <main>
      <section className="about-portrait">
        <div className="about-portrait-image">
          <Image 
             src="/images/JZPortrait.jpeg" 
             alt="Janet Zhang" 
             width={400} 
             height={600}
             style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="about-portrait-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Janet! I started Janet Zhang Media because I wanted to create something more than just a photography service, 
            I wanted to create an experience. Nothing excites me more than capturing that one moment where confidence, 
            personality, and emotion all click into place. That feeling you get when you see THE photo is what inspires everything I do. 
            I specialize in sports and lifestyle photography, from fast-paced action shots to meaningful graduation portraits and unforgettable events. 
            No matter the setting, my goal is always the same: to make every client feel comfortable, celebrated, and truly seen so their photos reflect the best version of who they are. 
            I'm currently a student at FSU, but I'm originally from Dallas, Texas, where my love for sports and creativity first began. 
            Outside of photography, you can find me at the gym, planning my next vacation, or watching whatever big game is on. 
            I'm a big believer that the things you love outside of work shape the way you create, and my hobbies remind me to slow down, explore, and appreciate moments from a different perspective. 
            I bring that same energy into my photography, creating an experience that feels comfortable, intentional, and personal for every client.
          </p>
        </div>
      </section>
    </main>
  );
}
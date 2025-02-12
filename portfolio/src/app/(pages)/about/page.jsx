import Image from 'next/image';
import profileImage from '@/app/_assets/images/profile.jpg';
import settings from '@/settings.json';

export default function AboutPage() {
  const { about } = settings;

  return (
    <div className="max-w-4xl">
      <div className="flex flex-col items-start gap-4">
        <p>About</p>
        <h1>{about.title}</h1>
        <div className="relative w-[300px] h-[300px] my-6">
          <Image
            src={profileImage}
            alt="Profile picture"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <h2>{settings.home.name}</h2>
        <p>{about.subtitle}</p>
        <hr />
        <p>{about.mainContent}</p>
        <hr />
        <p>{about.additionalContent}</p>
      </div>
      {about.info.map((info) => (
        <div key={info.label}>
          <p>{info.label}</p>
          <p>{info.value}</p>
        </div>
      ))}
    </div>
  );
}

import Image from 'next/image';
import styles from './Card.module.css'

const cardData = [
  {
    image: '/card1.png', // Unique image path for each card
    text: 'Currency Converter',
    link: 'https://currency-converter-kappa-black.vercel.app/'
  },
  {
    image: '/card2.png',
    text: 'Tic Tac Toe Game',
    link: 'https://tic-tac-toe-game-nine-coral.vercel.app/'
  },
  {
    image: '/card3.png',
    text: 'Website With Figma',
    link:'https://third-assignment-murex.vercel.app/'
  },
  {
    image: '/card4.png',
    text: 'Panacloud Website.',
    link: 'https://panacloud-website-jet.vercel.app/'
  },
  {
    image: '/card5.png',
    text: 'Resume Builder',
    text2: 'Coming Soon!'

  },
  {
    image: '/card6.png',
    text: 'Mobile Responsive Website.',
    text2: 'Coming Soon!'
  },
];

const PortfolioSection = () => {
  return (
    <div className={styles.card}>
      {cardData.map((card, index) => (
        <div className={styles.cardChildDiv} key={index}>
          <div className={styles.cardsImg}>
            <Image
              src={card.image} // Using unique image for each card
              alt={`Project ${index + 1}`}
              width={500}
              height={500}
              className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
            />
          </div>

          <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-xl text-[#d8e5fb] hover:underline"
            >
              {card.text}
            </a>
            
            {card.text2 && (
            <p className="mt-2 text-sm text-[#d8e5fb]">{card.text2}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
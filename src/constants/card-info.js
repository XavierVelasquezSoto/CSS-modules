import { v4 } from 'uuid';

export const CARD_INFO = [
	{
		id: v4(),
		bodyColor: 'sedan',
		img: 'assets/images/sedan.svg',
		title: 'SEDANS',
		text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		buttonText: 'Learn More'
	},
	{
		id: v4(),
		bodyColor: 'suvs',
		img: 'assets/images/suvs.svg',
		title: 'SUVS',
		text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		buttonText: 'Learn More'
	},
	{
		id: v4(),
		bodyColor: 'luxury',
		img: 'assets/images/luxury.svg',
		title: 'LUXURY',
		text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
		buttonText: 'Learn More'
	}
];

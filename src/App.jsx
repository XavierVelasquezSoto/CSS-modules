import CardFlex from "./components/card-flex/Card-flex";
import Card from "./components/card/Card";
import { CARD_INFO } from "./constants/card-info";

const App = () => {
	return <CardFlex>
	{CARD_INFO.map(cardInfo => {
		return <Card 
				key={cardInfo.id}
				bodyColor={cardInfo.bodyColor} 
				img={cardInfo.img} 
				title= {cardInfo.title} 
				text= {cardInfo.text} 
				buttonText={cardInfo.buttonText} 
			/>})
		}
			</CardFlex>
};

export default App;

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
  
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'ABUNDANCE Mask Moringa',
          img: 'Mask-Moringa.jpg',
          desc: 'Kaukė plaukams su Moringa. Giliai drėkina, maitina ir atstato plaukų struktūrą, suteikia švelnumo ir žvilgesio. Neapsukina plaukų. Tinka visų tipų plaukams, net ir labai nualintiems. Rekomenduojama po plaukų dažymo ar balinimo.',
          category: 'ABUNDANCE LINE',
          size: '250ml',
          price: '20.00'
        },
        {
          id: 2,
          title: 'ABUNDANCE Silk Moringa',
          img: 'Silk-Moringa.jpg',
          desc:  'Šilkinis nenuplaunamas plaukų kremas Moringa. Šilkiškumą suteikiantis nenuskalaujamas kremas. Neapsunkina, gerina plaukų struktūrą, atpalaiduoja ir drėkina plaukus, palengvina šukuosenos formavimą. Kremas apsaugo plaukus nuo karščio poveikio naudojant džiovintuvą ar žnyples. Apsaugo nuo išsišakojusių galiukų atsiradimo.',
          category: 'ABUNDANCE LINE',
          size: '100ml',
          price: '24.00'
        },
        {
          id: 3,
          title: 'ABUNDANCE Shampoo Moringa',
          img: 'Shampoo-Moringa.jpg',
          desc:  'Šampūnas Moringa. Regeneruojantis ir restruktūrizuojantis šampūnas su Moringa aliejumi. Tinka sausiems, dažytiems ir natūraliems plaukams. Suteikia plaukams apimtį ir pagerina plauko struktūrą.',
          category: 'ABUNDANCE LINE',
          size: '250ml',
          price: '18.00'
        },
        {
          id: 4,
          title: 'ABUNDANCE Repair Moringa',
          img: 'Repair-Moringa.jpg',
          desc:  'Rekonstruojantis produktas Moringa. REPAIR Moringa Abundance. Regeneruojantis ir giliai rekonstruojantis plaukų struktūrą produktas. Ypatinga produkto sudėtis, regeneruoja ir modifikuoja plaukų struktūrą. Plaukai tampa sveikesniais ir žvilgančiais. Atgaivina plaukų struktūrą jie tampa minkštais ir švelniais vienai/dviem savaitėms. Išryškina garbanotus plaukus. Plaukai mažiau šiaušiasi. Gerina pažeistų plaukų struktūrą. Maitina pažeistus, saus ir trapius plaukus.',
          category: 'ABUNDANCE LINE',
          size: ' ',
          price: '42.00'
        },
        {
          id: 5,
          title: 'REMEDY Sebum Volumizing Shampoo',
          img: 'Sebum-Volumizing-Remedy.jpg',
          desc:  'Apimtį didinantis šampūnas riebiems plaukams. Kedras ir Bergamotė. Valantis šampūnas mažinantis sebo kaupimąsi ir odos hiperhidrozę. Stiprina plaukus ir didina jų apimtį.',
          category: 'ABUNDANCE LINE',
          size: '250ml',
          price: '18.00'
        }
      ] 
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item]})
  }
}

export default App;

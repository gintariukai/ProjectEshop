import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
  
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'ABUNDANCE Mask Moringa',
          img: 'Mask-Moringa.jpg',
          desc: 'Kaukė plaukams su Moringa. Giliai drėkina, maitina ir atstato plaukų struktūrą, suteikia švelnumo ir žvilgesio. Neapsukina plaukų. Tinka visų tipų plaukams, net ir labai nualintiems. Rekomenduojama po plaukų dažymo ar balinimo.',
          category: 'Abundance',
          size: '250ml',
          price: '20.00'
        },
        {
          id: 2,
          title: 'ABUNDANCE Silk Moringa',
          img: 'Silk-Moringa.jpg',
          desc:  'Šilkinis nenuplaunamas plaukų kremas Moringa. Šilkiškumą suteikiantis nenuskalaujamas kremas. Neapsunkina, gerina plaukų struktūrą, atpalaiduoja ir drėkina plaukus, palengvina šukuosenos formavimą. Kremas apsaugo plaukus nuo karščio poveikio naudojant džiovintuvą ar žnyples. Apsaugo nuo išsišakojusių galiukų atsiradimo.',
          category: 'Bronze',
          size: '100ml',
          price: '24.00'
        },
        {
          id: 3,
          title: 'ABUNDANCE Shampoo Moringa',
          img: 'Shampoo-Moringa.jpg',
          desc:  'Šampūnas Moringa. Regeneruojantis ir restruktūrizuojantis šampūnas su Moringa aliejumi. Tinka sausiems, dažytiems ir natūraliems plaukams. Suteikia plaukams apimtį ir pagerina plauko struktūrą.',
          category: 'Abundance ',
          size: '250ml',
          price: '18.00'
        },
        {
          id: 4,
          title: 'ABUNDANCE Repair Moringa',
          img: 'Repair-Moringa.jpg',
          desc:  'Rekonstruojantis produktas Moringa. REPAIR Moringa Abundance. Regeneruojantis ir giliai rekonstruojantis plaukų struktūrą produktas. Ypatinga produkto sudėtis, regeneruoja ir modifikuoja plaukų struktūrą. Plaukai tampa sveikesniais ir žvilgančiais. Atgaivina plaukų struktūrą jie tampa minkštais ir švelniais vienai/dviem savaitėms. Išryškina garbanotus plaukus. Plaukai mažiau šiaušiasi. Gerina pažeistų plaukų struktūrą. Maitina pažeistus, saus ir trapius plaukus.',
          category: 'Shape',
          size: ' ',
          price: '42.00'
        },
        {
          id: 5,
          title: 'REMEDY Sebum Volumizing Shampoo',
          img: 'Sebum-Volumizing-Remedy.jpg',
          desc:  'Apimtį didinantis šampūnas riebiems plaukams. Kedras ir Bergamotė. Valantis šampūnas mažinantis sebo kaupimąsi ir odos hiperhidrozę. Stiprina plaukus ir didina jų apimtį.',
          category: 'Remedy',
          size: '250ml',
          price: '18.00'
        }
      ] 
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] /* }, () => {
      console.log(this.state.orders) */ // console output
    })
  }
}

export default App;

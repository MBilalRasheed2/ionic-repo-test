import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ProductsList from './pages/ProductsList';
import SingleProduct from './pages/SingleProduct/Index';
import CSVReader from './pages/CSVReader';

import { useEffect, useState } from 'react';
import { obj } from './components/DummyData';


setupIonicReact();

const App: React.FC = () => {
  const [fakeApiData, setFakeApiData] = useState<string[]>()
  useEffect(() => {
    let temp:any[]=[]
    Object.keys(obj).map((key: string, index: number) => {
      let data = obj[key as keyof typeof obj]
      let img = data.images.map(i => {
        let url = i.url.replace("{@width}", "660");
        url = url.replace("{@height}", "792");
        url = url.replace("{@quality}", "50");

        return url
      })
      let titles = data.titles
      let description = "";
      description = description + Object.keys(data.titles).map((k: string) => {
        return titles[k as keyof typeof titles] + ".";
      })
      
      temp.push({
        id: 71 + index,
        title: data.titles.superTitle,
        "description": description,
        price: data.pricing.prices[0].value,
        "discountPercentage": data.pricing.prices[0].discount,
        "rating": 4.44,
        "stock": 7,
        "brand": "luxury palace",
        category: "Women's Sarees",
        "thumbnail": img[0],
        "images": img
      })
    })
    setFakeApiData(temp)
  }, [])
  console.log("fakeApiData",fakeApiData)
  return (
    <IonApp style={{ overflow: 'scroll' }}>

        {/* {
          fakeApiData&& fakeApiData.map(item => {
            return <div>
            { JSON.stringify(item)},
            </div>
          })

        } */}
      <IonReactRouter>
        <IonRouterOutlet id='main'>
          <Route path='/' exact={true}>
            <Redirect to='/productlist' />
          </Route>
          <Route path={'/productlist'} exact={true}>
            <ProductsList />
          </Route>
          <Route path={'/product-details/:id'} component={SingleProduct} exact={true} />
          <Route path={'/product-files'} component={CSVReader} exact={true} />

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>

  );
};

export default App;

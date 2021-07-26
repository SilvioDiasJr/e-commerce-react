import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { DescriptionProduct } from '../pages/DescriptionProduct'
import { Home } from '../pages/Home'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/produto/descricao/:id">
          <DescriptionProduct />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
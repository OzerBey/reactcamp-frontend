import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn } from "semantic-ui-react";
//shortcut rfc (reactFunctionalComponent)
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
            <ProductList></ProductList>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}

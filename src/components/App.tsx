import React from "react";
import { Switch, Route } from "react-router-dom";
import ImagesComponent from "src/components/ImageDashboard/ImagesComponent";
import TransportGroup from "src/components/TransportGroup/TransportGroup";
import "src/components/App.scss";

export default (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/images" component={ImagesComponent} />
      <Route path="/" component={TransportGroup} />
    </Switch>
  );
};

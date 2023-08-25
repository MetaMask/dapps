import React, { Component } from "react";
import Dapp from "../Dapp";
import { getFaviconURLFromHtml } from "../../util/favicon";

/**
 * Get icon from page URL and render Dapp item
 * @extends Component
 */
export default class FavoriteItem extends Component {
  constructor(props) {
    super();

    this.state = {
      data: {
        ...props.data,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAO0lEQVR42u3OMQEAAAwCoNk/tIvhAwlIe1MREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQWAceA3R/wXUjjnYAAAAASUVORK5CYII=",
      },
    };
  }

  async componentDidMount() {
    try {
      const icon = await getFaviconURLFromHtml(this.props.data.icon);
      if (icon) {
        this.setState({
          data: {
            ...this.state.data,
            icon,
          },
        });
      }
    } catch (e) {}
  }

  render() {
    return <Dapp {...this.props} data={this.state.data} />;
  }
}

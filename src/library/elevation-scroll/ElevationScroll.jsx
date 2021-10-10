import React from "react";
import PropTypes from "prop-types";

// useScrollTrigger() hook to respond to user scroll actions events
import { useScrollTrigger } from "@material-ui/core";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    // delay on scrolling
    disableHysteresis: true,

    // how far user has to start scrolling before it triggers this event listener
    // With 0 meaning as soon as user starts scrolling, it will trigger an event
    // default is 100 where user scrolls further down before an event triggers
    threshold: 0,
  });

  // returns a new version of whatever component wrapping with elevation scroll
  // if event listener has set this trigger event, it will have elevation of 4 - floating state
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ElevationScroll;

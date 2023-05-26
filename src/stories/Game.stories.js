import React from "react";
import Game from "./Game";

// This is the base Story

export default {
  title: "Game",
  component: Game, //component imported from ln.2
};

// These are our named Stories (variations on base Story),

// const Template = (args) => <Cell {...args} />;
// export const Cell1 = Template.bind({});

// ^^^^ Writing it this way throws an unexpected token '<' error

export const Game1 = {
  args: {
   gameData: false,
   isLoading: false,
  },
};
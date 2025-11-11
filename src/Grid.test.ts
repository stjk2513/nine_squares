import { mount } from "@vue/test-utils";
import Grid from "./Grid.vue";

function setup() {
  const wrapper = mount(Grid);
  const grid = wrapper.find("[data-test='grid']");
  const boxes = wrapper.findAll("[data-test='box']");

  return { wrapper, grid, boxes };
}

test("should render 9 boxes", () => {
  const { boxes } = setup();

  expect(boxes.length).toBe(9);
});

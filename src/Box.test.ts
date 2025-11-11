import { mount } from "@vue/test-utils";
import Box from "./Box.vue";

function setup() {
  const wrapper = mount(Box);
  const box = wrapper.find('[data-test="box"]');

  return { wrapper, box };
}

test("box should begin with white background", () => {
  const { box } = setup();

  const bgColor: string = (box.element as HTMLElement).style.background;

  expect(bgColor).toBe("rgb(255, 255, 255)");
});

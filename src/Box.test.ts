import { mount } from "@vue/test-utils";
import Box from "./Box.vue";

const WHITE = "rgb(255, 255, 255)";

function setup() {
  const wrapper = mount(Box);
  const box = wrapper.find('[data-test="box"]');

  return { wrapper, box };
}

test("box should begin with white background", () => {
  const { box } = setup();

  const bgColor: string = (box.element as HTMLElement).style.background;

  expect(bgColor).toBe(WHITE);
});

test("box should change to a random non white color when clicked", async () => {
  const { box } = setup();

  await box.trigger("click");
  const bgColor: string = (box.element as HTMLElement).style.background;

  expect(bgColor).not.toBe("");
  expect(bgColor).not.toBe(WHITE);
});

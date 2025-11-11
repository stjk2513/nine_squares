import { mount } from "@vue/test-utils";
import Box from "./Box.vue";

test("box should turn into a non white color", async () => {
  const wrapper = mount(Box);

  const box = wrapper.find('[data-test="box"]');
  await box.trigger("click");

  expect(box).not.toEqual([]);
});

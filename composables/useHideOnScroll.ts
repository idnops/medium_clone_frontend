import { ref, onMounted, toValue } from "vue";
import type { MaybeRefOrGetter } from "vue";
import { useWindowScroll, useEventListener } from "@vueuse/core";

export const useHideOnScroll = (
  el: MaybeRefOrGetter<HTMLElement | null | undefined>,
  max: number,
  min: number
) => {
  const { y } = useWindowScroll();
  const currentScrollPos = ref<number>(0);
  const lastScrollPos = ref<number>(0);

  const handleScroll = () => {
    const element = toValue(el);

    const scrollDistance = y.value - lastScrollPos.value;
    const elementScrollPos = element?.getAttribute("data-scroll");

    let amount = Math.max(
      Math.min(
        +elementScrollPos! +
          (scrollDistance < 0
            ? Math.abs(scrollDistance)
            : -Math.abs(scrollDistance)),
        max
      ),
      min
    );

    element?.setAttribute("data-scroll", amount.toString());
    currentScrollPos.value = amount;
    lastScrollPos.value = y.value;
  };

  onMounted(() => {
    useEventListener("scroll", handleScroll);
  });

  return { scroll: currentScrollPos };
};

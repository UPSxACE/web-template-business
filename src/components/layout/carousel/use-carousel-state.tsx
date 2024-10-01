"use client";
import { CarouselApi } from "@/components/sui/carousel";
import { useCallback, useEffect, useState } from "react";

export default function useCarouselState() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(
    Boolean(api?.canScrollPrev())
  );
  const [canScrollNext, setCanScrollNext] = useState<boolean>(
    Boolean(api?.canScrollNext())
  );
  const refreshButtons = useCallback(() => {
    setCanScrollPrev(Boolean(api?.canScrollPrev()));
    setCanScrollNext(Boolean(api?.canScrollNext()));
  }, [api]);

  useEffect(() => {
    refreshButtons();
  }, [api, refreshButtons]);

  const next = () => {
    api?.scrollNext();
    refreshButtons();
  };

  const prev = () => {
    api?.scrollPrev();
    refreshButtons();
  };

  useEffect(() => {
    if (!api) return;

    api.on("slidesInView", refreshButtons);

    return () => {
      api.off("slidesInView", refreshButtons);
    };
  }, [api, refreshButtons]);

  return {
    api,
    setApi,
    canScrollNext,
    canScrollPrev,
    next,
    prev,
  };
}

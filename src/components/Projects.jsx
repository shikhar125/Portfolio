import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Weather Forecast",
      description:
        "A responsive weather app built with HTML, Tailwind CSS, and JavaScript. It provides real-time weather updates and a 5-day forecast for any city..",
      tech: ["Html", "TailwindCSS", "JavaScript"],
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBASEBIPDxAQEBAQEBAQDxAQEA8PFRUWFhUVFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAACAwQFAQYABwj/xAA2EAABBAEDAwMCBQIGAgMAAAABAAIDEQQSITEFQVFhcYETIgYykaHRUsEjQmKCsfAz4RQVFv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAApEQADAAICAwACAgIBBQAAAAAAAQIDERIhBDFBE1EiYQUUMhUjQlKR/9oADAMBAAIRAxEAPwDz4C+uPiwgFwNhALgbPqXHbDAXChALhWU4o+4e6WvQ2JbrZbl4u9+VKL6NWbAtkzsdU5EHh7AMCPIX8TF/TKOxeDC+iUOSD+Oj6ZlCu/dBd9hr+PROQmFBLVx2waQG2AWrhkA4IBQJC4Y5SATlLjtnCEA7OUuCCQgEW4IDJgUuGBc1KMmLIXDJiyEowJC4ZHKQOPiuCAQgEEoDIFcE9UGWtp5Hs5pREZ2lwDtLgbDaFwNjmRWg2NONsrgjpSpmrHGjXkh1Rsd8LLNapo9C43CZNJCqqiNY+wRByi6AsfYkwJuRJ4+yjGxu54CS7+FMeL6T5eLdlPFa6M+bFy7M+WAhWVGSoc+xOlMLsFzUo2xZC4ZAELhgaQCcLVx2zlIDbOELjtgkIBBIXBBcEBkBSAwDguChbglHQBCAyYBC4Y4UAglAYEoBFlcFHEBj1DVuPF2OaQeUrWhtp+wnQkIqhanRxrUSY+KG0rorGPfstjiUWzZMFEcKR0XiDYwYtUb29x9wWXJWrTN2KeUOScxKnIi5PjDsV3I7gA2BNyF4FM0Ya0N78lTl8nspc8Z0SmO1XZncks+Ne1Kk2Z7x7M7Ixa4VZvZjyYdeiNzVQhsWQuHALUApg6Vw2zhagEGlwThQOBIXDAkIBAKAQSFwwBCAyFuCAyFkIDpgkIBTAIQGAcEBkAUGMAVwUCgMeqC3niBrgD4ZCPUJanYVei+HFDhbefChVuema8eJUtocyCkrvZecWiiOJI6KzBUyFSdGhQanSGVI2+HfaflZ873JpwLVHJ8bS4jwSEZva2Co09HDF9vujy7Oc9BYmPZLj+Vgs/2S5L60vocePvb+Ec51Ek+VaOloz329nzGd0zoTiKnamknSM6eFWmjJePZC7FCrzMrwEssJCdPZJy09CjGuCAVx2xZQDsFy4IC4Y4UAguXBQBCAwJQCgXBcMLcgMhZCAwJCAyAKAwsoDIW5AcAoBRxAY9WAt54YQC4DY6NtoNgS2zRxQRVLPfZ6GPaNzFc14p+x7O/lY7VR3J6eNzfVDJcBzeRt2cOClnMqHrC5HY0SWmUmdF0cNEfqFF1taKqdFvUse3Bw4e0O+e6jirS1+iuWdvf7JpoKDR6WqTXsWpO5keiMM7n7n/2CGOuVcv8A4HIuM8TKdBa1cjJw2C4UNuEy7EpaJ3C1RMi0LkxyeEVaEeNsjmi087qqrZnueJnZjr4CtCMWV/ohdafRHYtwRCAUBkcXBBcgFC3Lh0cQOOFczgCEBgXIDIWUBkCQuGAKDCLcgOhbko6FlcMCUGMgEAnrmhbjwmGAuAVY8anTNGKGaMDVnpm/Gi+AKNGqEbODkFuxpzTy0rHkjfa6Zux3rr4aIwGuGqLfyw/mH8qH5XPVFvxp9yOggsV37fwhVa7Gmd9FroNUbfLSW/B3ClvVP+ymto5/8UarP5WAE/HZDl1pfTuK2Z+RCXOLjsLslWmuKSROp5PbM/IbewGyvHXbI1+kKGC6rOw8nZN+ZfBPwt+yeT6bf9R/ZUXKiVcJ/slnmJ9FaZSM922SPjtVTM9IjzsbkjuqxRlz4traMmRlFX3swNNPTFPC4KEuCBRAkrhgbQOBcuGQCAx8SuZwJQCAUBkAVwwJQCAUAoW5AdC3IDoByAyFuQGQCAx7LSt54GxkcZKVsaZdFsLCo0zdjmki6EFRo240y+H2UKNMmhjsHss9M0ykbOGwggj9jRWW2n7NEpr0bMLQ7kU7zVX7rP6LFbYefXn3QOOSwgj3NlD0cZ+VjD/MdI7NG5TzWvRzSfszJ5ms/I3f+p25Vph1/wAmTdKfSMjKmc67JK145S9GW6b9mdKCtCM1IXInRGkLLU2ybQws2Q2dx6MzqGFe4Vsd/sxZ8G+0Y0kZHIWjezFpr2IeEB0LcFwwBCAwK4ZAoBOLjgSUAglAYBxXDAlAIDlwUA5KMhbkB0LKA6FuQGQKAx71sK1ujx1jKYYFOqNGPGVx4xUXaNU42VRYruwKlWSTTGOjRx8B/j9SoVmk1Tho0sfA8uYP9wWas36RpnF+2aWPCwcvHwCVCqp/CymV9NXFc3sXFRe/oxaFxx85ccQZLPDQ75XJ/wBhMbLfX+Ro+Foid/SVPXwysiU+B+i0xBnqmQTSH0V5lGeqZI95KskZ6phtFrhezrwVyAxEoTolSIMiAG1SaM2TGmZE+MQrppmRy59k7mLgKgSxcNyFujQGVAli4KYtwQHQsoDIFy4YEoBAKAUCVwwLkAinJR0A4IDJiyuHAQGP0eOvCs9nnToqhf4AUqk0RX6LmSlSco0q2ffWf5KHCf0OslfsNkrvJPykcopNv9lsBJ4UqLz2amOQOTfoFlrb9GmdI2cWTbU77W9gO6zUu9IuvWy2Ge69bNegSa0E6Zht68e6JxBkS3/pd+x/hMkK2Z0+U4bO39xatONPtE6tr2Z8ro3dtPsryqRKqhkU2OOxtXm39IVC+MidCQrKkzNUNHYRymYiGOCCOYhzUxNomkjtOmTc7JZYkyZKpIn4gVORneFCn4yPIV4iWSKkyZJpyJLFwdi3tXDSydzECqYJagMmKcEB0ASgMgSuCA4oDIW5AZAFAZCygMDSAx+u9X/DcuOwyamyRhwaS0EEXwSPHz3SYfLnK+OtMln8G8M8t7RnxFXZGWVMKkXQwApWUkdEApsrOilj/Cm5LzRq4UYH3P4H7rLkb9Sasa65MoGSXuHYdh4CnwUofnyZfiz2XHw00pXOkkVl7bFHItp8g2m49i8toXkSa26hyNnfyjK4vQKfJbM90/Z24/cK6j6iLv4yWYdxuFaSFImeVRIR+gbKbRN0HQXdg6ALURXoVIwpkxGiaXZMhGTkJtkxZYEdg4onmamTJUiGegqIz3pEbynIC3LgoWWoDpintXMdMQ4JSqYlwXDoAoDIAoDoByAwDkAoAoDIFcE/o/CZ9WJ8T31qbTTQsHz/AMLxqfGlSR7ErnDlmb+IuhOfcjPps0MOsUGl1Vvd0f2WnxvJU/xe+zJ5fiuv5zpa9nm4meVubPPlFDWpGWQQalGRZixdzwFG6+I0419Y2XIJ9hwEix6GrJsZFJQJ7nYJanb0PNaWyzBkpkh/00o5J/ki2OumTxTb+9hO5EmgIsjSfTg+yao2hVemLym0duDuE2N9C5OuycvpV0RdAOAKZdCvsWSmRJs6zlcwGxh4rQbdwW36G+2/KzXba6NWOEn2Jyenus7c8D0TTlQt4mY2bjOYacCPQ8rRFJ+jLkxufZGWqhHQqU7IoFeiOR6okQbJZ2gpkStbRC9UMwpcMcIQCgHBcMhEjUCksne1AqmLIQHQtwQGQBCA4KBwJauG2faVx2z9sx+oEcbLBWPZvnLo3cPqLpfsc1r2u2II7d1lvGo7RpnJz6Zi9cxGsmcI26WDSK3O9Df2Wzx7dQm32YfIxqb/AIrod0Pp7ZH/AHg0PWt/CXyMrlfxKePhVPsb1PpYhcKssdwTV33BSYs35F/Y+TDwf9EBeVZSSdC6XHJhvf28JUh3RZju/wAN3qpUt2i0vUMl1bqmiW+z6U7oyCmMjdYo/CVrT2Mq2tEz2m1VEWLKYRsJq5gGigUvsKPWYEX1IgXgbigOaHledkrjXR6eNcp7PpIAyzyDtv290FXILniZrumvdOA8a2NIIPDR/PsrflSjrpkPxN332get9FjEZ0RgPG4c0d/FBdhz1y7Z2fx549Ls8bPjPo/aRXkUvSVrfs8msda9GdPA7lWVIzXFEcoNbp0QpPRG8JyAshcE4gEBy5joU9AZCHhAqmJc1AdMW4Lh0wC1AbZzShoOz7SuO2c0oHbP1qFhKyNm9LZ6zoeCRTnDarHZYc2TfSNuHHrtl+TKbNsFHazvfz8KUpa9lKb/AEMi+/chpI8hB/x9DLse9rXW1wa4eDukTa7QzSfTMbM6djg0GOG3Op2/stMZcjXszXix71oyeo4QjIc29Dr0h35gRyPXnlaceTktP2jPkx8HteiNrLVNkvZosx/8GwRd7tvevZQdfz0aVP8A2yLTSsQOkbLkcCiDYbm2EF0c+yWRqoiTOBEA1u6VhR7LpMRbCwHkizfruvLzUnbaPWwzqFsdkMsEVfG3lJPTHa30ESQ0k8gIfQ/DEz8t187jbbZaIhELpk4ijnFS81QN1SblWP8A4iOJyLVGHnYMDYyGai9rqc47A/C1Y8tuu/Riy4Mcx17RiZOLfAcb42WqbMd4t/DPlxR7KqszVgRHLjEeqdWmZ6xNEzmJhAHBcFCXBAomLcEB0KcFw6ALEA8gdC4bkC5i45MEhAbZyl2g7P1bFfSwtbPRl6NzF6qQNJJpZqxfTTOX4XMz6GxseDwp8CnM5D1KTcNoX3rhF45+gWR/BmPnPbd0UKxywzdIrZlNeNLqbfHi1Pg57Q6tV0wpsGOaMMJNsOxB3B7+66clRW/2dWObnX6MCXCkhfuDputTeHN/t8rYsk2jE8dY2bmDDHo1OF6j35HssmSq5aTNkKeOxGZ0tpd9mwLbrn2TxmaXYl4U30Y82OWkitvK0zSZmqWibSqEjrLC5hRySJFMFIWWI7E0FGN0H6DJ7Hp5OgWQT5Hitl5eT/l0etj3x7HP2F8pF2OJktzL4N18JvT0L7RkZeOPlVmiVSQuBCf2JrQmXGdNsPtcAd/6h4P7JlajtiVjdkmJjgAB9tLS6/F70P8AvhUu38EjGtafwy+uxNBtvJNnb0WjBT+mTysaXaMYOtaWYktk8gpMidSkTSUmJNIne1EXWhRaiHYtzUBkwaXB2CQuCmA4IDJi3BcOgaQCfoplKyaN7Y6PIpBoKorhzCa32U3BRWXw5dKbnZVXoe/OCVYwvIfQZvnhNUCzkKoc2iKSONrsecmn0bUXUQRwszxNGpZNiMmcvIAFAIzKlC1WzQbpNOqjVfCn36KLXsz+rx6Y9uC7e+bVsL3RDMtSYLmfotuzG0AWoihMFoNhQM8dC101sFTo7iYrn8D7bAJ7C0LtSGIdej1ML2tAA7AC157Tb2ekmktBAl9jsO57oPoKew2nYgV8JRiCeEnlUTEaMyWDdOmTcj4GmOjslb5DytAy4zZLpoaXGyfXyuVcTnCZ53rmFW1E+Hc2tmC99mLPj+Hl5oKO1rcq6POrH30RTuIO6rJly7TJy5MQVHaQKJbEPCYl6YtwXBTApAbZwhcEWQgOhbguGTApAbZ+h5HKxSz0qXYkWU2xNDWWu2FJlsEhSNIomx/KXYdD2NQbCpLIIt1OqKTJr4eKSoXaNEQXtiPpt3UWyuhzG7Hfb+6Gw6IsrFfIG72Bdj+6rGRQ2RvG7SIs3CLBvx2PYlXx5OTI5MfFGc4K+zOdjKDCi6HGD3NBFglRq+KbReYVNJm7FC1opoAoAbABY3Tb7NalJdCzADdbeUeR3EZp0tS72w60jPDzr/hU+CfSpgOk6qpI/Y6I5Q0abI3O3wmW2L0js8zCPIHhBJ7C2hjYvHHc+iXYxDnN0usGr2KpL6Ero+6fhRMBc1rQ48uFm/14RvJVe2CMcz2keW/En4eEkmsPDHuNEEfa71vseFt8fyuE6a2jzvM8JZa5J6Z4zJwHslMRH3h2n0Pg+y9Kck1PJHiVgucn437N2L8I5I3dooAbBwtx22F/92WR+Zj+HpR/jsi9mJ1fpksDwJQBqBLacHAj4WnFlnItyYfI8e8Nfy+kBVTOA5AZC3LhkAUBkA5cMgFwx+juhteaqPZcg/SrhNsVyOjb5Q2HRsdOwGvItQyZGi0Y0zQl6NpFjdTWbZR4UhRwSBZTfk2Lw0dhBvYFc2tHJGs3I+m3ccnTQ5JUePJ9FeXFdlLJ27Xt7pHLHVIEXqNO2Hbsj8B9ChjIJcdgfVBv4FL6K6m0mN210b54A/5T4WlRPMm5Z58brczCgwxK2FI2emuuuwaCPlZcpsxMt1eSPSlHRbYLGmz3HItFvoC9n2QfVCTmZn5XEkqvtE10zgzQXc0P7ruAeQ4hr/zVtdeh8+qXbXoOkyWLAcG1YdZs0aO5TvImxFjaRoTimD0ACivZZ+jHnBcd+yquifsqhk2AA7JGh0yTq0Grbv6dk+OtC2tmbJhQghzmj6wr7gbdsKVpyVrS9EHijfJrsRN+Ii1w1D7bDSBs4Hz68J14+10JXk8X2ea/F+YJHihWm/fdbPEjjJ5n+RyKqX9HnStZ5qQBK4ZAFcEFyAyFuXDAoBP1fBY12xXkU2j6GUn7NCHpjHGt78qbyND/AI0z4dJYHEOcB6d/0TfleukL+Jb7Zo48MUTbvkGifKk3VvQ+phGfkdVIcC2iB8laJwbXZmryNPo+/wDttv6rN0e3ou/Ad/sIrPVDQMbWk8nt+iT8Pf8AJlHm6/ijNxmzanF1/caaT5WiuGtIzT+TbbF5eVKw0b3G3ikYiaXQt5Ll9joupPEbm8uftZPA9krxJ0n8Qyz0pa+s0cHrLgKcLAIAPdRvx1vovj8h67KX9TjcC1w+0/qkWGl2h3mmumZzmaHGjbf8p8jsrp7RDjxYcUn6HkLmjpos+q0fl2H7qPF/S3JL0EzLr190Hj2MshTDltPOynUNFJtMZML4SLoZkM0B3sqioVyZjm/d8qm+iWuzVihBAJ2+VFsupCjdp2s12QfZy6PmTEktO53r27LnOuzk/hI+Ml3ik2xddnPrtAd30jsu4th5IxXdVDgbI3shvcAdyVf8OiH5kyPIymvpz9i4VeqhY49VRQ10hHart/TxfVMzU81e218cey9HHGpPE8jLyvr4QulJ5Nqpnffs4XLjgCuCa/Rvw7PkgOZTWXWp3juQO6z5vJjH0/ZsweFeVbXSNvL/AAjCxrh9RxeWgAkCmu7mh2KyT5lU/XR6D/x2OV7eyWD8Ggi3zj00t39eSnrzf1Ik/wCNX/lQD/wcAf8Ay3/tXf7v9Df9NX/setjxmtIp47XvwszptejXpJ+z0WMQG7EE9j6rNSezQvR5Xq0jmZBt1uP3fbwL4C9HDKrH6PKz04ydsZNM5zGts7DddMqa2G7dSkQva4An0Vk0+jM012JjmKdyiatlcMx/9KdSi02zWxsw1v24Wesa2apyvXYnLeHJ4WieR8hLuB2TL2I/QMclFFoCrQyXKQUBdjo8rUPbhK40x1fJDopErQ6Y0zJOI3I4yUHuua0cns0emt1EEg89uyhlejRiWzQkyBfHCgpNHImneHbBMloVvZi5GcxjgPzkXdditE46pGe8sy9GfP1FxJr7QTwOytOJIz1mb9DoervAoN1mqv09kjwJv2PPkPXrYTOoONOvSR5unX8IfjS6HWVvse6Rx/MdDj4ohJpfCm2/fRi57pGahqNEE+jhwfYrRHGvhlyO5+nn55lrUmCshFkTd/CeZI3lMyU2VUz732LXBBKATT6L0iSeRoAGiwXkmqZe/wA0o5s0xJq8fxay0uuj9S+1jKaA0NFADYALw9un2fSJKVpHm8/JLnWtMrSI0yBz3Xdn9U/WhOxgyHeUukPtjMZ5BJ335C20jzJph/XeOCR8o8ZEeSl6EtcS6zv6lPpJaRHbdbZUJkvEryCe+xRQS0zm9oQ5oB2T7JNaZodOxnPsiqHO4BUclqfZoxY3XaPT9MiZVOABqjY2cP5WHLVb6PRxTOu0ZfVYWtkIYKFDb17rRhpuezNmlKuiVzdlRPsk10RTmlREKZPI+06RNvY7EmrZLUjxWitk6nxLKgjKhoPIOKTfbxSDQ0s0IM4sbzVbKFY02aJytSSy9Qdquz+vCdYlom8z3sRl9XcQAPFX39UYwIF+S9aRmRNDidTtP7q1Nr0jPKVPth6BY3sWLPf487IbH46PQRyY7RbGiwKvv+vdYmsj9s3p412kQ9UzYyK8jbjZVxY6XZLLlnWjCyM6n6muO3krVOPrTMV5tPaO5vVhI3uDVUKq9v4SxhcsbJ5KuTz+VItco8zLZA9yoZ/YhyI6BcgMEA0nirKXsdabPf8A4PxmtYXf1AVZvZeT5dt1o+g8KFMbRo9RkJ2HAUIWjVRkPiceyqmT1sB2Ou2HiSuhNpgaZTA1bWeTJ1yKFYtgTEw2jdcEdGCUrYy2yiOIXwkdFFJdjHTxspUtlpeio5R7lT4FOYt5s2mXQr77EvfWydCNmdlK0mbITgpyZwHdEC9lQep6K7CDkNDJj2PpI0UTCfPsgpC6JXPTk9iZAmQrJXPoptE9htmSuR1Y5uQkclFkIsmVUmSN0Zs7lZGW6ZNJN+qdSReQnkfaZIm3sS9doZCyuGQBQCUdPkDJY3EWGuBISZJ3LRXDSnImz2zOtRNB0CvgAfsvLeCn7PoF5GNLoObrURaDye4CVYK3oZ+RGticrPj0ghw4v1XTiregvLOt7M4dbDTxY/dV/Aya8pGfL1hxcSKVVhWiT8rs3WvVdGLZ819lHWgbCLVx2g2NAQbOSQ9rwlKbGNlS6DyC+ou0HYJmXcQcihs+yTiPyBdICjoDZPO9PKJ2yVrfKpsipGGMUhsbiLDimEDY5K0OmH9VDQ3I4XrtHbAtEBdB0iZwst0jy/b145UKzxP0vPj5K+GZlY72kNc0hzq0j+q+K8q83LW0zNcVL012bP8A+daItT5NEhAIDqpvFg1ud749Fk/23y0l0bv9JcO3pkWJ0d7naXHSPIpwIPBBHyqXnSW0Tx+LTemY+czS5zSbLSRfmlpxvaT/AGYsy400/hlzvV5RjuiV5TkBRXDIBy5jAOQGQK4IcaV+hp9lbJVFo1ze0dLihpD8mLdIV2juTEuciDYGpcds9YCuANYUoyGB6AdnHSI6A6CbIuO2E16DQUxpehobYBejoVsYJEuhtnxkXaO2CXWERd7F2mFDBQGHY2IZHBja1Hi9h5SXkULbGjG7rSLpfw9O0WQ0j0cL991JeVDLvw8iQmHpRJGo0CmrMtdCT47b7Nk9JdGHiIA6hVuO7dtxvssv51WuRt/A4TUfT7p/RWCi+n1XG1Edl2TyKfSOxeNK7fZpvNk2Nuw8LMagHwNcQS1pqq1NBIIOxF8I8mvoHKftGX11tcd+fdVwk8vRF0+VzWmiN/PZUtJsnjbS6POdbfqkeC0NeDuQSb2W7AtSu+jyvLadNa7MSVhWtM825EObSZE2tCiF2wo+ZCXOa0fmcQ0DbcnYJXSS2x5ltpL6Oz+myQ6fqAAvBIFgmh32SRlm98fhbLgvFrn9IqTkj4IMK9lDCkZplnSUhUArjgKXBSPtKA2kf//Z",
      liveUrl: "https://shikhar125.github.io/Weather-Podcast/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-pink-600 to-purple-600",
    },
    {
      id: 2,
      title: "Typing Speed",
      description:"A responsive typing speed test built with HTML, CSS, and JavaScript. It calculates WPM (Words Per Minute), accuracy, and time taken.",
      tech: ["Html", "Css", "Javascript"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWw7iCNyLXMGSEvYis_hV7YMX_Qi2A6zBWw&s",
      liveUrl: "https://shikhar125.github.io/Typing-speed/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      title: "Student Registration system",
      description: "A web-based student registration system built with HTML, CSS, and JavaScript. It allows users to register, view, and manage student records efficiently.",
      tech: ["Html", "Css", "Javascript"],
      image: "https://www.macroconnect.net/wp-content/uploads/2018/05/student-registration.jpg",
      liveUrl: "https://shikhar125.github.io/Student-Registration-System/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-green-600 to-teal-600",
    },
    {
      id: 4,
      title: "Real State Website",
      description:"A modern real estate website built with React, TypeScript, Tailwind CSS, and HTML. It offers seamless property browsing with advanced search and filtering.",
      tech: ["React", "Typescript", "Tailwind CSS", "Html"],
      image: "data:image/jpeg;base64,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",
      liveUrl: "https://shikhar125.github.io/Dream-Home/",
      githubUrl: "https://github.com/shikhar125",
      color: "from-yellow-600 to-orange-600",
    },
  
  ];

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-5xl font-bold inline border-b-4 border-purple-500">
            Projects
          </p>
          <p className="py-6 text-purple-300">
            Showcasing my journey through code - Each project represents a
            learning milestone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative rounded-lg cursor-pointer overflow-hidden group shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-75`}
              />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/20 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            >
              <motion.div
                layoutId={selectedId}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find((p) => p.id === selectedId) && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      {projects.find((p) => p.id === selectedId).title}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      {projects.find((p) => p.id === selectedId).description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={projects.find((p) => p.id === selectedId).liveUrl}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={
                          projects.find((p) => p.id === selectedId).githubUrl
                        }
                        className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 px-4 py-2 rounded-lg transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;

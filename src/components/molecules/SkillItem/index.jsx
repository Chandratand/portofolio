import { Popover } from "@headlessui/react";
import { useState } from "react";
import { usePopper } from "react-popper";

const SkillItem = ({ icon, desc }) => {
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover className="relative">
      <Popover.Button
        aria-label="show skill desc"
        ref={setReferenceElement}
        className="focus-within:outline-none"
      >
        <span>{icon}</span>
      </Popover.Button>

      <Popover.Panel
        className="absolute z-10"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <div className="w-[300px] max-w-[300px] rounded-2xl bg-white p-4 shadow-xl">
          <p className="body">{desc}</p>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default SkillItem;

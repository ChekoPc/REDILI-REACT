import React, { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

interface AudioPopoverProps {
  label: string;
  buttonLabel?: string;
  letra?: string;
}

const AudioPopover: React.FC<AudioPopoverProps> = ({ label, buttonLabel = "letra", letra }) => {
  const [letraContent, setLetraContent] = useState<string>("");

  useEffect(() => {
    if (letra) {
      fetch(letra)
        .then((res) => res.text())
        .then((text) => {
          setLetraContent(text);
        })
        .catch(() => {
          setLetraContent("Error al cargar la letra");
        });
    }
  }, [letra]);

  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button color="primary">{buttonLabel}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 max-h-60 overflow-auto text-sm whitespace-pre-wrap">
          <h3 className="font-bold mb-2">{label}</h3>
          {letraContent ? (
            <p className="text-muted-foreground">{letraContent}</p>
          ) : (
            <p className="text-muted-foreground italic">Cargando letra...</p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AudioPopover;
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function DragAndDrop({
  handleImageChange,
  dragError,
  setDragError,
  image,
  setImage,
}) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState();
  const [isShaking, setIsShaking] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files); // Convertimos a Array para usar .every o .filter

    if (files && files.length > 0) {
      // Validamos que TODOS los archivos sean jpg o png
      const allValid = files.every(
        (file) => file.type === "image/jpeg" || file.type === "image/png"
      );

      if (!allValid) {
        setDragError({ ...dragError, DragAndDropError: true });
        return; // Detenemos la ejecución si hay archivos no permitidos
      }

      // Si son válidos, los asignamos al input
      fileInputRef.current.files = e.dataTransfer.files;

      const event = {
        target: fileInputRef.current,
      };
      handleImageChange(event);
    }
  };

  function handleRemove(e) {
    console.log("clickeado");
    setImage(null);
    fileInputRef.current.value = "";
  }

  return (
    <div className="w-full">
      <div>
        <p className="text-[#EAE8FB] text-lg mb-2 font-semibold">
          Upload Avatar
        </p>
        <motion.div
          className={`bg-[#1C173F] rounded-2xl flex flex-col items-center border-2 border-[#504B74] border-dashed py-7  transition-all ease-in-out duration-150  ${
            isDragging && "scale-90"
          } ${image ? "cursor-default" : "cursor-pointer"}`}
          onClick={
            !image
              ? () => {
                  fileInputRef.current.click();
                }
              : undefined
          }
          onDragOver={
            !image
              ? handleDragOver
              : (e) => {
                  e.preventDefault();
                  setIsShaking(true);
                }
          }
          onDragLeave={
            !image
              ? handleDragLeave
              : (e) => {
                  e.preventDefault();
                  setIsShaking(false);
                }
          }
          onDrop={!image ? handleDrop : (e) => e.preventDefault()}
          animate={
            isShaking ? { scale: [1, 1.05, 0.95, 1.05, 1] } : { scale: 1 }
          }
          transition={{
            duration: 0.3,
          }}
        >
          {image ? (
            <div className="flex flex-col items-center mb-5">
              <img className="scale-50 max-h-[200px]" src={image} alt="" />
              <div className="flex gap-3">
                <button
                  type="button"
                  className="py-2 px-3 bg-[#312F50] rounded-xl text-sm text-[#A2A0BB] cursor-pointer appearance-none outline-none active:scale-90"
                  onClick={handleRemove}
                >
                  Remove Image
                </button>
                <button
                  type="button"
                  className="py-2 px-3 bg-[#312F50] rounded-xl text-sm text-[#A2A0BB] cursor-pointer appearance-none outline-none active:scale-90"
                  onClick={() => {
                    fileInputRef.current.click();
                  }}
                >
                  Change Image
                </button>
              </div>
            </div>
          ) : (
            <>
              <img
                className="bg-[#2d2d4b]/90 p-3 shadow-2xl rounded-xl border border-white/10 mb-4"
                src="/icon-upload.svg"
                alt="icon-upload"
              />
              <p className="text-[#9492AF]">Drag and drop or click to upload</p>
            </>
          )}
        </motion.div>
        <input
          id="avatar-upload"
          type="file"
          ref={fileInputRef}
          className="text-white hidden"
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
        />
        <div
          className={`flex gap-1 items-center mt-3 transition-all ease-in-out duration-100${
            isDragging && "hidden opacity-0"
          }`}
        >
          <img
            src={` ${
              dragError.DragAndDropError
                ? "/icon-info-error.svg"
                : "/icon-info.svg"
            } `}
            alt="icon-info"
          />
          <span
            className={`text-[#686782] text-[0.7rem] ${
              dragError.DragAndDropError && "text-red-400"
            }`}
          >
            Upload your photo (JPG or PNG, max size: 500KB)
          </span>
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop;

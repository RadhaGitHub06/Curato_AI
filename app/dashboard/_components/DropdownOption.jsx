// import { HiOutlineTrash } from "react-icons/hi2";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../Components/ui/dropdown-menu";
// import React, { useState } from "react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "../../../Components/ui/alert-dialog";

// function DropdownOption({ children,handleOnDelete}) {
//   const [openAlert, setOpenAlert] = useState(false);
  
  

//   return (
//     <div>
//       <DropdownMenu>
//         <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuItem onClick={() => setOpenAlert(true)}>
//             <div className="flex items-center gap-1">
//               <HiOutlineTrash className="text-black" /> Delete
//             </div>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       <AlertDialog open={openAlert} >
//         <AlertDialogContent className="bg-white">
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//             <AlertDialogDescription>
//               This action cannot be undone. This will permanently delete your course and remove its data.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel  onClick={() => setOpenAlert(false)}>
//               Cancel
//             </AlertDialogCancel>
//             <AlertDialogAction
//               className="text-black"
//               onClick={()=>handleOnDelete()}
             
//             >
//              continue
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }

// export default DropdownOption;
import { HiOutlineTrash } from "react-icons/hi2";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../Components/ui/dropdown-menu";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../Components/ui/alert-dialog";

function DropdownOption({ children, handleOnDelete }) {
  const [openAlert, setOpenAlert] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // 🔹 Track deletion state

  const onDeleteClick = async () => {
    try {
      setIsDeleting(true); // 🔹 Show loading state
      await handleOnDelete(); // 🔹 Execute delete function
      setOpenAlert(false); // 🔹 Close alert on success
    } catch (error) {
      console.error("Error deleting course:", error);
    } finally {
      setIsDeleting(false);
      console.log("chala ya nahi") // 🔹 Reset state
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setOpenAlert(true)}>
            <div className="flex items-center gap-1">
              <HiOutlineTrash className="text-black" /> Delete
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your course and remove its data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting} onClick={() => setOpenAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="text-black"
              onClick={onDeleteClick} // 🔹 Updated to use the async function
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DropdownOption;

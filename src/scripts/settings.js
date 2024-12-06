import { loadTemplate } from "./loadTemplate.js";

export default class Settings {
  constructor() {
    this.isEditingVMac = false;
    this.render()
  }

  render() {
    loadTemplate("templates/settings.html", "content").then(() => {
      this.attachListeners();
    })
    .catch(error => {
      console.error("Error loading template:", error);
    });
  }
  attachListeners() {
    const btnEditVideoMacro = document.getElementById("btnEditVideoMacro");
    try{
        btnEditVideoMacro.addEventListener("click", () => {
          this.editVideoMacro()
        });
    } catch (error) {
      alert('unable to bind listeners')
    }
  }
  // editVideoMacro(){
  //   const divEditVideoMacro = document.getElementById("divEditVideoMacro");
  //   try{
  //     // let keys = [];
  //     // const keyHandler = (event) => {
  //     //   keys.push(event.key); // Record the key
  //     //   if (keys.length === 2) {
  //     //     document.removeEventListener('keydown', keyHandler); // Stop listening
  //     //     alert(`Keys pressed: ${keys.join(', ')}`);
  //     //   }
  //     // };

  //     // // Listen for keydown events
  //     // document.addEventListener('keydown', keyHandler);
  //   } catch (error) {
  //     alert(divEditVideoMacro)
  //   }
  // }
}


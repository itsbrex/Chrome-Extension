/*
 * © MedioAI.com - Wynter Jones (@AI.MASSIVE)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

const medioAI = {
  init: () => {
    const checkSidebar = setInterval(() => {
      const sunoSidebarSelector = 'body > div.css-fhtuey > div.css-lb6gzl > nav > div.chakra-stack.css-nkmpho'
      const sidebar = document.querySelector(sunoSidebarSelector)

      if (sidebar) {
        clearInterval(checkSidebar)
        const sidebar = document.querySelector(sunoSidebarSelector)
        sidebar.insertAdjacentHTML('beforeend', uiMedioAI.sidebarLinks)
        notificationMedioAI.init()
        tagBuilderMedioAI.init()
        songStudioMedioAI.init()
        medioAITrackCounter.load()
      }
    }, 100)
  },
}

window.onload = () => {
  medioAI.init()
}
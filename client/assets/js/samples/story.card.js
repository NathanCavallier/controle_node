export function StoryCard(imageLink, title, isFavorite, isFinished) {

    return `
        <button type="button" id="group_19" nameid="Group 19" href="../client/pages/storyReader.html">
            <div nameid="Group 19" id="_bg__group_19_ek1"></div>
            <div nameid="Rectangle 5" id="rectangle_5"></div>
            <img src=${imageLink} id="alice_au_pays_des_merveilles_ek1" title="Alice au pays des merveilles" />
            <div nameid="bouton_accueil" id="bouton_accueil_ek4"></div>
            <div nameid="Alice au pays des merveilles" id="alice_au_pays_des_merveilles">
                ${title}
            </div>

            <button type="button" id="solar_play_outline" nameid="solar:play-outline"
                href="../client/pages/storyReader.html">
                <div nameid="solar:play-outline" id="_bg__solar_play_outline_ek1"></div>
                <img src="../client/assets/img/vector_ek5.png" nameid="Vector" id="vector_ek5"
                    title="Alternate Text" />

            </button>

            <div id="material_symbols_favorite_outline_ek2" nameid="material-symbols:favorite-outline">
                <div nameid="material-symbols:favorite-outline"
                    id="_bg__material_symbols_favorite_outline_ek3">
                </div>
                <img src="../client/assets/img/vector_ek6.png" nameid="Vector" id="vector_ek6"
                    title="Alternate Text" />

            </div>

        </button>
    `;
}
<!--
  (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 
  SPDX-License-Identifier: MIT
 -->

<style>
  .grid-container {
    display: grid;
    gap: 1rem 1rem;
    grid-template-areas:
      'a b'
      'a c';
  }
</style>

<script lang="ts">
  import { ComponentType } from 'svelte';
  import FrontPageContentTile from '../components/FrontPageContentTile.svelte';
  import DoItYourselfMachineLearningTile from './home-page-content-tiles/DoItYourselfMachineLearningTile.svelte';
  import NewFeaturesTile from './home-page-content-tiles/NewFeaturesTile.svelte';
  import WhatIsMachineLearningTile from './home-page-content-tiles/WhatIsMachineLearningTile.svelte';
  import ControlBar from '../components/control-bar/ControlBar.svelte';
  import ContactUsControlBarButton from '../components/control-bar/control-bar-items/ContactUsControlBarButton.svelte';
  import SelectLanguageControlBarDropdown from '../components/control-bar/control-bar-items/SelectLanguageControlBarDropdown.svelte';
  import { t } from '../i18n';
  import { state } from '../script/stores/uiStore';
  import Environment from '../script/Environment';
  import DevTools from '../components/DevTools.svelte';
  import { Paths, navigate } from '../router/paths';
  import StandardButton from '../components/StandardButton.svelte';

  type ContentTile = { tile: ComponentType; spanColumns: number };
  // Just add the content titles you wish to put on front page, in the order you wish them to be there
  const contentTiles: ContentTile[] = [
    // { tile: DoItYourselfMachineLearningTile, spanColumns: 1 },
    // { tile: NewFeaturesTile, spanColumns: 1 },
    { tile: WhatIsMachineLearningTile, spanColumns: 2 },
  ];
</script>

<main class="h-full flex flex-col">
  <div class:hidden={$state.isLoading}>
    <div>
      <ControlBar>
        <div class="w-full">
          {#if Environment.isInDevelopment}
            <div class="float-left flex flex-row">
              <p>(DevTools)</p>
              <DevTools />
            </div>
          {/if}
          <div class="float-right flex flex-row">
            <!-- <ContactUsControlBarButton /> -->
            <SelectLanguageControlBarDropdown />
          </div>
        </div>
      </ControlBar>
    </div>
    

      <div class="border-gray-200 border border-solid bg-white p-18 shadow-xl mb-6">

      <div>

      <h1 class="text-center text-xl p-6 font-semibold" style="font-size: 3rem; line-height: 1.2em">CALLIOPE MINI - EINSTIEG IN MASCHINELLES LERNEN</h1>

      <div class="h-full w-full grid grid-cols-3 gap-12 mt-10 mb-18 justify-center bg-white">

      <div class="text-center m-auto" style="max-width: 40ch;">
        <h2 class="text-lg font-semibold">1. Daten aufnehmen</h2>
        <img class="w-75 m-auto" src="/imgs/1_Calliope_mini.svg" />
        <p>Nimm Deispiele von Aktionen auf, die dein Modell erkennen soll (z. B. Schütteln und Klatschen).</p>
      </div>

      <div class="text-center m-auto" style="max-width: 40ch;">
        <h2 class="text-lg font-semibold">2. Modell trainieren</h2>
        <img class="w-75 m-auto" src="/imgs/2_Rechner.svg" />
        <p>Nutze deine Trainingsbeispiele, um das Lernmodell auf die Erkennung der Aktionen zu trainieren.</p>
      </div>

      <div class="text-center m-auto" style="max-width: 40ch;">
        <h2 class="text-lg font-semibold">3. Modell prüfen</h2>
        <img class="w-75 m-auto" src="/imgs/3_Modell.svg" />
        <p>Teste, ob die einzelnen Aktionen korrekt erkannt werden. Mit mehr Daten kannst du das Modell verbessern.</p>
      </div>

      </div>

      </div>
      
        <StandardButton color="blue" onClick={() => {
          navigate(Paths.DATA);
        }}
          >LOSLEGEN</StandardButton>
      </div>

      <div class="p-10 pb-2 pt-2 mt-3">

      <div class="grid-container grid-cols-2 min-w-800px">
        {#each contentTiles as { tile, spanColumns }}
          <FrontPageContentTile contentComponent={tile} fillColumns={spanColumns} />
        {/each}
      </div>
    </div>
    <div class="flex-grow flex items-end">
      <div class="pb-2 pl-10">
        <p>
          {$t('content.index.acknowledgement')} -
          <a class="text-link hover:underline" href="https://cctd.au.dk/">cctd.au.dk</a>
        </p>
      </div>
    </div>
  </div>
</main>

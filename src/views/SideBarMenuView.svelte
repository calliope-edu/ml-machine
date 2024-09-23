<!--
  (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 
  SPDX-License-Identifier: MIT
 -->

<!-- Left-hand side menu -->
<script lang="ts">
  import Menus, { MenuProperties } from '../script/navigation/Menus';
  import MenuButton from '../menus/MenuButton.svelte';
  import { get } from 'svelte/store';
  import Environment from '../script/Environment';
  import { Paths, currentPath, navigate } from '../router/paths';
  import { state } from '../script/stores/uiStore';
    import { Feature, getFeature } from '../script/FeatureToggles';
    import { t } from '../i18n';

  $: shouldBeExpanded = (menuProps: MenuProperties) => {
    let path = $currentPath;
    if (menuProps.navigationPath === path) {
      return true;
    }
    if (menuProps.additionalExpandPaths === undefined) {
      return false;
    }
    return menuProps.additionalExpandPaths.includes(path);
  };

  const onLoad = () => {
    $state.isLoading = false;
  };
</script>

<div
  class="bg-primary relative flex items-center justify-between w-full overflow-clip">
  <!-- flush top bar -->
  <div class="justify-center flex flex-row ml-4">

      <div class="flex flex-col max-w-50 cursor-pointer" on:click={() => navigate(Paths.HOME)}>
        <img on:load={onLoad} src="/imgs/calliope_logo.png" alt="Calliope logo" />
      </div>
    
  </div>

  <!-- Menu -->
  <div class="p-0 pl-5 pr-5 h-full">
    <!-- <div class="absolute bottom-15 -left-2">
      <img alt="decoration arrows" src="/imgs/partial_red_arrows.svg" width="225px" />
    </div> -->

    <div class="flex align-center items-center space-x-6 w-full h-full">

      {#each get(Menus.getMenuStore()) as menu, id}
        <div class="w-60 max-w-20vw h-full flex items-center">
          <MenuButton
            onClickFunction={() => {
              navigate(menu.navigationPath);
            }}
            title={menu.title}
            helpTitle={menu.infoBubbleTitle}
            helpDescription={menu.infoBubbleContent}
            isExpanded={shouldBeExpanded(menu)}>
            <svelte:component
              this={shouldBeExpanded(menu)
                ? menu.expandedButtonContent
                : menu.collapsedButtonContent} />
          </MenuButton>
        
        </div>
  
      {/each}
    </div>
    
  </div>
  <div class="justify-center flex flex-row ml-4 opacity-0">

    <div class="flex flex-col max-w-50" >
      <img on:load={onLoad} src="/imgs/calliope_logo.png" alt="Calliope logo" />
    </div>
  
</div>
</div>
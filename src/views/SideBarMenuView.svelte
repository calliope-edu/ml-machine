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
  <div class="h-12 flex justify-center">
    <p class="text-secondarytext font-extrabold self-center text-3xl">
      {getFeature(Feature.TITLE)}
    </p>
    <div class="text-white self-center ml-4 focus:outline-none">
      <button
        class="rounded hover:bg-white
						   hover:bg-opacity-10 duration-100
						   select-none outline-none"
        on:click={() => navigate(Paths.HOME)}>
        <i class="fas fa-home text-2xl outline-none" />
      </button>
    </div>
  </div>

  <!-- Menu -->
  <div class="p-0 pl-5 pr-5 h-full">
    <!-- <div class="absolute bottom-15 -left-2">
      <img alt="decoration arrows" src="/imgs/partial_red_arrows.svg" width="225px" />
    </div> -->

    <div class="flex items-center space-x-6 w-full h-full">
 


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
  

        {#if id !== get(Menus.getMenuStore()).length - 1}
          <div class="text-center ml-auto mr-auto mb-1 mt-1">
            <img
              on:load={onLoad}
              class="m-auto"
              src="/imgs/right_arrow.svg"
              alt="right arrow icon"
              width="30px" />
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

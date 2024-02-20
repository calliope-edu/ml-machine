<!--
  (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 
  SPDX-License-Identifier: MIT
 -->

<script lang="ts">
  import GestureTilePart from './../GestureTilePart.svelte';
  import StaticConfiguration from '../../StaticConfiguration';
  import { PinTurnOnState } from './PinSelectorUtil';
  import { t } from '../../i18n';
  import MBSpecs from '../../script/microbit-interfacing/MBSpecs';
  export let onPinSelect: (pin: MBSpecs.UsableIOPin) => void;
  export let onTurnOnTimeSelect: (turnOnArgs: {
    turnOnState: PinTurnOnState;
    turnOnTime: number;
  }) => void;

  export let turnOnTime: number;
  export let turnOnState: PinTurnOnState;
  export let selectedPin: MBSpecs.UsableIOPin | undefined;

  let selectedTurnOnState = turnOnState;
  let turnOnTimeInSeconds = turnOnTime / 1000;

  const onPinSelected = (pin: MBSpecs.IOPin) => {
    if (!includes(StaticConfiguration.supportedPins, pin)) {
      return;
    }
    onPinSelect(pin as MBSpecs.UsableIOPin);
  };

  const onTurnOnStateSelect = () => {
    onTurnOnTimeSelect({
      turnOnState: selectedTurnOnState,
      turnOnTime: turnOnTimeInSeconds * 1000,
    });
  };

  const largePins: MBSpecs.IOPin[] = [0, 1, 2, 3];

  // Hacky way to check if a value is included in an array since typescript
  // has made a very poor decision on how array.includes() is typed
  function includes<T>(array: T[], value: unknown): boolean {
    return array.includes(value as T);
  }
</script>

<GestureTilePart>
  <div class="m-3">
  <div class="flex flex-row w-full items-center width-full">
    {#each largePins as currentPin}
      {#if includes(StaticConfiguration.supportedPins, currentPin)}
        <!-- These are pins we support, make them selectable and yellow -->
          <!-- Large pins -->
          <div
            on:click={() => {
              onPinSelected(currentPin);
            }}
            class="ml-1px bg-yellow-300 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full"
            class:border-yellow-500={selectedPin === currentPin}
            class:border-width-2={selectedPin === currentPin}
            class:hover:bg-yellow-200={selectedPin !== currentPin}
            class:bg-opacity-80={selectedPin !== currentPin}>
            <p class="text-black text-l font-bold select-none">{currentPin}</p>
          </div>
      {:else}
        <!-- This are pins we DO NOT support, make them non-selectable and gray -->
          <!-- Large pins -->
          <div class="ml-1px bg-yellow-300 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full opacity-40">
            <p class="text-black text-l font-bold select-none">{currentPin}</p>
          </div>
      {/if}
    {/each}
  </div>

  <div
    class:hidden={selectedPin === undefined}
    class="flex flex-col justify-center">
    <div class="my-2">
      <label>
        <input type="radio" id="allTimeRadio" bind:group={selectedTurnOnState} value={PinTurnOnState.ALL_TIME} class="radio-input hidden" on:change={onTurnOnStateSelect}>
        <div class="flex items-center cursor-pointer mr-4 radio-label">
          <div class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            <div class="w-3 h-3 bg-blue-500 rounded-full checked-indicator hidden"></div>
          </div>
          {$t('content.model.output.pin.option.allTime')}
          </div>
      </label>
    
      <label>
        <input type="radio" id="xTimeRadio" bind:group={selectedTurnOnState} value={PinTurnOnState.X_TIME} class="radio-input hidden" on:change={onTurnOnStateSelect}>
        <div class="flex items-center cursor-pointer mr-4 radio-label">
          <div class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            <div class="w-3 h-3 bg-blue-500 rounded-full checked-indicator hidden"></div>
          </div>
          {$t('content.model.output.pin.option.xTime')}
        </div>
      </label>
    </div>
    <div class="">
      {#if turnOnState === PinTurnOnState.X_TIME}
        <div class="flex flex-row">
          <p class="mr-2">{$t('content.model.output.pin.seconds')}</p>
          <input
            type="number"
            on:change={onTurnOnStateSelect}
            class="w-12 border-1 border-primaryborder"
            bind:value={turnOnTimeInSeconds} />
        </div>
      {/if}
    </div>
  </div>

</div>
</GestureTilePart>


<style>
  /* Style for checked radio button */
  .radio-input:checked + .radio-label .checked-indicator {
    display: block;
  }
</style>
<!--
  (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 
  SPDX-License-Identifier: MIT
 -->

<script lang="ts">
  import { state } from '../script/stores/uiStore';
  import { t } from '../i18n';
  import { classifier, gestures } from '../script/stores/Stores';
  import Gesture from '../script/domain/stores/gesture/Gesture';

  const bestPrediction = gestures.getBestPrediction();

  $: confidence =
    $state.isInputReady && $bestPrediction
      ? $bestPrediction.getConfidence().getCurrentConfidence()
      : 0;
  confidence = isNaN(confidence) ? 0 : confidence;

  const getPredictionLabel = (
    isInputReady: boolean,
    bestPrediction: Gesture | undefined,
  ) => {
    if (!bestPrediction) {
      return $t('menu.model.noModel');
    }
    if (!isInputReady) {
      return $t('menu.model.connectInputMicrobit');
    }
    return bestPrediction.getName();
  };

  const model = classifier.getModel();

  $: confidenceLabel = Math.round(confidence * 100).toString() + '%';
  $: predictionLabel = getPredictionLabel($state.isInputReady, $bestPrediction);
</script>

<div class="w-full text-center justify-center pt-2">
  {#if !$model.hasModel}
    <div
      class="w-34 m-auto mb-8 border-2 border-white border-opacity-30 rounded-lg border-dashed font-bold text-warm-gray-300">
      <div class="flex h-full">
        <div class="m-auto">
          {$t('menu.model.noModel')}
        </div>
      </div>
    </div>
  {:else}
    <div
      class="grid break-words mr-auto ml-auto w-3/4 h-50px border-2 rounded-lg border-solid text-center align-center content-center relative overflow-hidden">
      <p
        class="w-full max-w-[100%] break-all z-2 text-md">
        {#if $state.isInputReady}
          {confidenceLabel}
        {/if}
        {predictionLabel}
      </p>
      <div class="percentage h-full bg-primary absolute z-1 opacity-60" style="--percentage: {confidenceLabel};"></div>
    </div>
  {/if}
</div>

<style>
  .percentage {
    width: var(--percentage);
  }
</style>
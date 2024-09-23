<!--
  (c) 2023, Center for Computational Thinking and Design at Aarhus University and contributors
 
  SPDX-License-Identifier: MIT
 -->

 <script lang="ts">
    import { state } from '../../script/stores/uiStore';
    import { t } from '../../i18n';
    import PleaseConnectFirst from '../../components/PleaseConnectFirst.svelte';
    import ControlBar from '../../components/control-bar/ControlBar.svelte';
    import StandardButton from '../../components/StandardButton.svelte';
    import { Paths, navigate } from '../../router/paths';
    import TrainingFailedDialog from './TrainingFailedDialog.svelte';
    import ReTrainModelButton from './ReTrainModelButton.svelte';
    import { classifier, gestures } from '../../script/stores/Stores';
  
    const model = classifier.getModel();
  
    const filters = classifier.getFilters();
  
    const sufficientData = gestures.hasSufficientData();
  </script>
  
  <!-- <TrainingFailedDialog /> -->


      {#if !sufficientData}
        <!-- <div class="w-full text-primarytext">
          <h1 class="w-3/4 text-3xl bold m-auto">
            {$t('menu.trainer.notEnoughDataHeader1')}
          </h1>
          <p class="w-3/5 text-xl m-auto mt-5">
            {$t('menu.trainer.notEnoughDataInfoBody')}
          </p>
        </div> -->
      {:else if $model.isTraining}
        <!-- <div class="w-3/4 text-primarytext">
          <div class="ml-auto mr-auto flex center-items justify-center">
            <i
              class="fa fa-solid fa-circle-notch text-5xl animate-spin animate-duration-[2s]" />
          </div>
          <p class="bold text-3xl bold mt-10">
            {$t('menu.trainer.isTrainingModelButton')}
          </p>
        </div> -->
      {:else}
          {#if $model.isTrained}
            <!-- Modell wurde Trainiert -->
          {/if}
          {#if $filters.length == 0}
            <!-- Kein Filter ausgewählt -->
          {:else}
              <ReTrainModelButton />
          {/if}
      {/if}


  
#if !defined(__TIMER_ADVANCED) && !defined(__TIMER_GP) && !defined(__TIMER_GP_WITH_SYNC) && !defined(__TIMER_GP_WITH_TRIG)
#define __TIMER_BASIC
#endif

#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_SYNC) || defined(__TIMER_GP) || defined(__TIMER_BASIC)
#define __TIMER_WIDTH16
#endif

#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
#define __TIMER_NUM_CCR 4
#elif defined(__TIMER_GP_WITH_SYNC)
#define __TIMER_NUM_CCR 2
#elif defined(__TIMER_GP)
#define __TIMER_NUM_CCR 1
#else
#define __TIMER_NUM_CCR 0
#endif

<groupName>TIM</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>

  <register>
    <name>CR1</name>
    <displayName>CR1</displayName>
    <description>control register 1</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
#ifndef __TIMER_BASIC
      <field>
        <name>CKD</name>
        <description>Clock division</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#endif
      <field>
        <name>ARPE</name>
        <description>Auto-reload preload enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
      <field>
        <name>CMS</name>
        <description>Center-aligned mode
        selection</description>
        <bitOffset>5</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DIR</name>
        <description>Direction</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG) || defined(__TIMER_GP_WITH_SYNC) || defined(__TIMER_BASIC)
      <field>
        <name>OPM</name>
        <description>One-pulse mode</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>URS</name>
        <description>Update request source</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UDIS</name>
        <description>Update disable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CEN</name>
        <description>Counter enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>

#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG) || defined(__TIMER_GP_WITH_SYNC) || defined(__TIMER_BASIC)
  <register>
    <name>CR2</name>
    <displayName>CR2</displayName>
    <description>control register 2</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
#ifdef __TIMER_ADVANCED
      <field>
        <name>OIS4</name>
        <description>Output Idle state 4</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OIS3N</name>
        <description>Output Idle state 3</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OIS3</name>
        <description>Output Idle state 3</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OIS2N</name>
        <description>Output Idle state 2</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OIS2</name>
        <description>Output Idle state 2</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OIS1N</name>
        <description>Output Idle state 1</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OIS1</name>
        <description>Output Idle state 1</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
      <field>
        <name>TI1S</name>
        <description>TI1 selection</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>MMS</name>
        <description>Master mode selection</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
      <field>
        <name>CCDS</name>
        <description>Capture/compare DMA
        selection</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#ifdef __TIMER_ADVANCED
      <field>
        <name>CCUS</name>
        <description>Capture/compare control update
        selection</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CCPC</name>
        <description>Capture/compare preloaded
        control</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
    </fields>
  </register>

#ifndef __TIMER_BASIC
  <register>
    <name>SMCR</name>
    <displayName>SMCR</displayName>
    <description>slave mode control register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
      <field>
        <name>ETP</name>
        <description>External trigger polarity</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ECE</name>
        <description>External clock enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ETPS</name>
        <description>External trigger prescaler</description>
        <bitOffset>12</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ETF</name>
        <description>External trigger filter</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
#endif
      <field>
        <name>MSM</name>
        <description>Master/Slave mode</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TS</name>
        <description>Trigger selection</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>SMS</name>
        <description>Slave mode selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
#endif
#endif

  <register>
    <name>DIER</name>
    <displayName>DIER</displayName>
    <description>DMA/Interrupt enable register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
      <field>
        <name>TDE</name>
        <description>Trigger DMA request enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifdef __TIMER_ADVANCED
      <field>
        <name>COMDE</name>
        <description>COM DMA request enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>CC4DE</name>
        <description>Capture/Compare 4 DMA request
        enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC3DE</name>
        <description>Capture/Compare 3 DMA request
        enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC2DE</name>
        <description>Capture/Compare 2 DMA request
        enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC1DE</name>
        <description>Capture/Compare 1 DMA request
        enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG) || defined(__TIMER_BASIC)
      <field>
        <name>UDE</name>
        <description>Update DMA request enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG) || defined(__TIMER_GP_WITH_SYNC)
      <field>
        <name>TIE</name>
        <description>Trigger interrupt enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 4
      <field>
        <name>CC4IE</name>
        <description>Capture/Compare 4 interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 3
      <field>
        <name>CC3IE</name>
        <description>Capture/Compare 3 interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 2
      <field>
        <name>CC2IE</name>
        <description>Capture/Compare 2 interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 1
      <field>
        <name>CC1IE</name>
        <description>Capture/Compare 1 interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>UIE</name>
        <description>Update interrupt enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifdef __TIMER_ADVANCED
      <field>
        <name>BIE</name>
        <description>Break interrupt enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>COMIE</name>
        <description>COM interrupt enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
    </fields>
  </register>

  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>status register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
#if __TIMER_NUM_CCR >= 4
      <field>
        <name>CC4OF</name>
        <description>Capture/Compare 4 overcapture
        flag</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 3
      <field>
        <name>CC3OF</name>
        <description>Capture/Compare 3 overcapture
        flag</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 2
      <field>
        <name>CC2OF</name>
        <description>Capture/compare 2 overcapture
        flag</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 1
      <field>
        <name>CC1OF</name>
        <description>Capture/Compare 1 overcapture
        flag</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#ifdef __TIMER_ADVANCED
      <field>
        <name>BIF</name>
        <description>Break interrupt flag</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG) || defined(__TIMER_GP_WITH_SYNC)
      <field>
        <name>TIF</name>
        <description>Trigger interrupt flag</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#ifdef __TIMER_ADVANCED
      <field>
        <name>COMIF</name>
        <description>COM interrupt flag</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 4
      <field>
        <name>CC4IF</name>
        <description>Capture/Compare 4 interrupt
        flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 3
      <field>
        <name>CC3IF</name>
        <description>Capture/Compare 3 interrupt
        flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 2
      <field>
        <name>CC2IF</name>
        <description>Capture/Compare 2 interrupt
        flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 1
      <field>
        <name>CC1IF</name>
        <description>Capture/compare 1 interrupt
        flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>UIF</name>
        <description>Update interrupt flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>

  <register>
    <name>EGR</name>
    <displayName>EGR</displayName>
    <description>event generation register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x0000</resetValue>
    <fields>
#ifdef __TIMER_ADVANCED
      <field>
        <name>BG</name>
        <description>Break generation</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG) || defined(__TIMER_GP_WITH_SYNC)
      <field>
        <name>TG</name>
        <description>Trigger generation</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#ifdef __TIMER_ADVANCED
      <field>
        <name>COMG</name>
        <description>Capture/Compare control update
        generation</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 4
      <field>
        <name>CC4G</name>
        <description>Capture/compare 4
        generation</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 3
      <field>
        <name>CC3G</name>
        <description>Capture/compare 3
        generation</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 2
      <field>
        <name>CC2G</name>
        <description>Capture/compare 2
        generation</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 1
      <field>
        <name>CC1G</name>
        <description>Capture/compare 1
        generation</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>UG</name>
        <description>Update generation</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>

#if __TIMER_NUM_CCR >= 1
  <register>
    <name>CCMR1_Output</name>
    <displayName>CCMR1_Output</displayName>
    <description>capture/compare mode register 1 (output
    mode)</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#if __TIMER_NUM_CCR >= 2
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
      <field>
        <name>OC2CE</name>
        <description>Output Compare 2 clear
        enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>OC2M</name>
        <description>Output Compare 2 mode</description>
        <bitOffset>12</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>OC2PE</name>
        <description>Output Compare 2 preload
        enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OC2FE</name>
        <description>Output Compare 2 fast
        enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC2S</name>
        <description>Capture/Compare 2
        selection</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#endif
#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
      <field>
        <name>OC1CE</name>
        <description>Output Compare 1 clear
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>OC1M</name>
        <description>Output Compare 1 mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>OC1PE</name>
        <description>Output Compare 1 preload
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OC1FE</name>
        <description>Output Compare 1 fast
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC1S</name>
        <description>Capture/Compare 1
        selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CCMR1_Input</name>
    <displayName>CCMR1_Input</displayName>
    <description>capture/compare mode register 1 (input
    mode)</description>
    <alternateRegister>CCMR1_Output</alternateRegister>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <!-- TODO XXX: There is a mismatch between the SVD and datasheet -->
#if __TIMER_NUM_CCR >= 2
      <field>
        <name>IC2F</name>
        <description>Input capture 2 filter</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>IC2PCS</name>
        <description>Input capture 2 prescaler</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CC2S</name>
        <description>Capture/Compare 2
        selection</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#endif
      <field>
        <name>IC1F</name>
        <description>Input capture 1 filter</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>ICPCS</name>
        <description>Input capture 1 prescaler</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CC1S</name>
        <description>Capture/Compare 1
        selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
#endif
#if __TIMER_NUM_CCR >= 3
  <register>
    <name>CCMR2_Output</name>
    <displayName>CCMR2_Output</displayName>
    <description>capture/compare mode register 2 (output
    mode)</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#if __TIMER_NUM_CCR >= 4
      <field>
        <name>OC4CE</name>
        <description>Output compare 4 clear
        enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OC4M</name>
        <description>Output compare 4 mode</description>
        <bitOffset>12</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>OC4PE</name>
        <description>Output compare 4 preload
        enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OC4FE</name>
        <description>Output compare 4 fast
        enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC4S</name>
        <description>Capture/Compare 4
        selection</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#endif
      <field>
        <name>OC3CE</name>
        <description>Output compare 3 clear
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OC3M</name>
        <description>Output compare 3 mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>OC3PE</name>
        <description>Output compare 3 preload
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OC3FE</name>
        <description>Output compare 3 fast
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC3S</name>
        <description>Capture/Compare 3
        selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CCMR2_Input</name>
    <displayName>CCMR2_Input</displayName>
    <description>capture/compare mode register 2 (input
    mode)</description>
    <alternateRegister>CCMR2_Output</alternateRegister>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#if __TIMER_NUM_CCR >= 4
      <field>
        <name>IC4F</name>
        <description>Input capture 4 filter</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>IC4PSC</name>
        <description>Input capture 4 prescaler</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CC4S</name>
        <description>Capture/Compare 4
        selection</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#endif
      <field>
        <name>IC3F</name>
        <description>Input capture 3 filter</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>IC3PSC</name>
        <description>Input capture 3 prescaler</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CC3S</name>
        <description>Capture/compare 3
        selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
#endif

#if __TIMER_NUM_CCR > 0
  <register>
    <name>CCER</name>
    <displayName>CCER</displayName>
    <description>capture/compare enable
    register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
#if __TIMER_NUM_CCR >= 4
#ifndef __TIMER_ADVANCED
      <field>
        <name>CC4NP</name>
        <description>Capture/Compare 4 output
        Polarity</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>CC4P</name>
        <description>Capture/Compare 3 output
        Polarity</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC4E</name>
        <description>Capture/Compare 4 output
        enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 3
      <field>
        <name>CC3NP</name>
        <description>Capture/Compare 3 output
        Polarity</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifdef __TIMER_ADVANCED
      <field>
        <name>CC3NE</name>
        <description>Capture/Compare 3 complementary output
        enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>CC3P</name>
        <description>Capture/Compare 3 output
        Polarity</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC3E</name>
        <description>Capture/Compare 3 output
        enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 2
      <field>
        <name>CC2NP</name>
        <description>Capture/Compare 2 output
        Polarity</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifdef __TIMER_ADVANCED
      <field>
        <name>CC2NE</name>
        <description>Capture/Compare 2 complementary output
        enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>CC2P</name>
        <description>Capture/Compare 2 output
        Polarity</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC2E</name>
        <description>Capture/Compare 2 output
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
#if __TIMER_NUM_CCR >= 1
      <field>
        <name>CC1NP</name>
        <description>Capture/Compare 1 output
        Polarity</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#ifdef __TIMER_ADVANCED
      <field>
        <name>CC1NE</name>
        <description>Capture/Compare 1 complementary output
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
      <field>
        <name>CC1P</name>
        <description>Capture/Compare 1 output
        Polarity</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CC1E</name>
        <description>Capture/Compare 1 output
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#endif
    </fields>
  </register>
#endif

  <register>
    <name>CNT</name>
    <displayName>CNT</displayName>
    <description>counter</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#ifdef __TIMER_WIDTH16
      <field>
        <name>CNT</name>
        <description>counter value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#else
      <field>
        <name>CNT_H</name>
        <description>High counter value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>CNT_L</name>
        <description>Low counter value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#endif
    </fields>
  </register>

  <register>
    <name>PSC</name>
    <displayName>PSC</displayName>
    <description>prescaler</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>PSC</name>
        <description>Prescaler value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>

  <register>
    <name>ARR</name>
    <displayName>ARR</displayName>
    <description>auto-reload register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#ifdef __TIMER_WIDTH16
      <field>
        <name>ARR</name>
        <description>Auto-reload value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#else
      <field>
        <name>ARR_H</name>
        <description>High Auto-reload value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>ARR_L</name>
        <description>Low Auto-reload value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#endif
    </fields>
  </register>

#if __TIMER_NUM_CCR >= 1
  <register>
    <name>CCR1</name>
    <displayName>CCR1</displayName>
    <description>capture/compare register 1</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#ifdef __TIMER_WIDTH16
      <field>
        <name>CCR1</name>
        <description>Capture/Compare 1 value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#else
      <field>
        <name>CCR1_H</name>
        <description>High Capture/Compare 1
        value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>CCR1_L</name>
        <description>Low Capture/Compare 1
        value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#endif
    </fields>
  </register>
#endif
#if __TIMER_NUM_CCR >= 2
  <register>
    <name>CCR2</name>
    <displayName>CCR2</displayName>
    <description>capture/compare register 2</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#ifdef __TIMER_WIDTH16
      <field>
        <name>CCR2</name>
        <description>Capture/Compare 2 value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#else
      <field>
        <name>CCR2_H</name>
        <description>High Capture/Compare 2
        value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>CCR2_L</name>
        <description>Low Capture/Compare 2
        value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#endif
    </fields>
  </register>
#endif
#if __TIMER_NUM_CCR >= 3
  <register>
    <name>CCR3</name>
    <displayName>CCR3</displayName>
    <description>capture/compare register 3</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#ifdef __TIMER_WIDTH16
      <field>
        <name>CCR3</name>
        <description>Capture/Compare value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#else
      <field>
        <name>CCR3_H</name>
        <description>High Capture/Compare value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>CCR3_L</name>
        <description>Low Capture/Compare value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#endif
    </fields>
  </register>
#endif
#if __TIMER_NUM_CCR >= 4
  <register>
    <name>CCR4</name>
    <displayName>CCR4</displayName>
    <description>capture/compare register 4</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
#ifdef __TIMER_WIDTH16
      <field>
        <name>CCR4</name>
        <description>Capture/Compare value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#else
      <field>
        <name>CCR4_H</name>
        <description>High Capture/Compare value</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>CCR4_L</name>
        <description>Low Capture/Compare value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
#endif
    </fields>
  </register>
#endif

#if defined(__TIMER_ADVANCED) || defined(__TIMER_GP_WITH_TRIG)
  <register>
    <name>DCR</name>
    <displayName>DCR</displayName>
    <description>DMA control register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>DBL</name>
        <description>DMA burst length</description>
        <bitOffset>8</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>DBA</name>
        <description>DMA base address</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>

  <register>
    <name>DMAR</name>
    <displayName>DMAR</displayName>
    <description>DMA address for full transfer</description>
    <addressOffset>0x4C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>DMAB</name>
        <description>DMA register for burst
        accesses</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
#endif

#ifdef __TIMER_ADVANCED
  <register>
    <name>RCR</name>
    <displayName>RCR</displayName>
    <description>repetition counter register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>REP</name>
        <description>Repetition counter value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BDTR</name>
    <displayName>BDTR</displayName>
    <description>break and dead-time register</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>MOE</name>
        <description>Main output enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AOE</name>
        <description>Automatic output enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BKP</name>
        <description>Break polarity</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BKE</name>
        <description>Break enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OSSR</name>
        <description>Off-state selection for Run
        mode</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OSSI</name>
        <description>Off-state selection for Idle
        mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LOCK</name>
        <description>Lock configuration</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DTG</name>
        <description>Dead-time generator setup</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
#endif

#ifdef __TIMER_TIM2
  <register>
    <name>OR</name>
    <displayName>OR</displayName>
    <description>TIM2 option register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>ITR1_RMP</name>
        <description>Internal trigger 1 remap</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
#endif
#ifdef __TIMER_TIM5
  <register>
    <name>OR</name>
    <displayName>OR</displayName>
    <description>TIM5 option register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000</resetValue>
    <fields>
      <field>
        <name>IT4_RMP</name>
        <description>Timer Input 4 remap</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
#endif
#ifdef __TIMER_TIM11
  <register>
    <name>OR</name>
    <displayName>OR</displayName>
    <description>option register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>RMP</name>
        <description>Input 1 remapping
        capability</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
#endif
</registers>
#undef __TIMER_BASIC
#undef __TIMER_ADVANCED
#undef __TIMER_GP
#undef __TIMER_GP_WITH_SYNC
#undef __TIMER_GP_WITH_TRIG
#undef __TIMER_TIM2
#undef __TIMER_TIM5
#undef __TIMER_TIM11
#undef __TIMER_WIDTH16
#undef __TIMER_NUM_CCR

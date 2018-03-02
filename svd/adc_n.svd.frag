<description>Analog-to-digital converter</description>
<groupName>ADC</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>SR</name>
    <displayName>SR</displayName>
    <description>status register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OVR</name>
        <description>Overrun</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>STRT</name>
        <description>Regular channel start flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JSTRT</name>
        <description>Injected channel start
        flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JEOC</name>
        <description>Injected channel end of
        conversion</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EOC</name>
        <description>Regular channel end of
        conversion</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWD</name>
        <description>Analog watchdog flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR1</name>
    <displayName>CR1</displayName>
    <description>control register 1</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OVRIE</name>
        <description>Overrun interrupt enable</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RES</name>
        <description>Resolution</description>
        <bitOffset>24</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>AWDEN</name>
        <description>Analog watchdog enable on regular
        channels</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JAWDEN</name>
        <description>Analog watchdog enable on injected
        channels</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DISCNUM</name>
        <description>Discontinuous mode channel
        count</description>
        <bitOffset>13</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>JDISCEN</name>
        <description>Discontinuous mode on injected
        channels</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DISCEN</name>
        <description>Discontinuous mode on regular
        channels</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JAUTO</name>
        <description>Automatic injected group
        conversion</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWDSGL</name>
        <description>Enable the watchdog on a single channel
        in scan mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SCAN</name>
        <description>Scan mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JEOCIE</name>
        <description>Interrupt enable for injected
        channels</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWDIE</name>
        <description>Analog watchdog interrupt
        enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EOCIE</name>
        <description>Interrupt enable for EOC</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AWDCH</name>
        <description>Analog watchdog channel select
        bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR2</name>
    <displayName>CR2</displayName>
    <description>control register 2</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SWSTART</name>
        <description>Start conversion of regular
        channels</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EXTEN</name>
        <description>External trigger enable for regular
        channels</description>
        <bitOffset>28</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>EXTSEL</name>
        <description>External event select for regular
        group</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>JSWSTART</name>
        <description>Start conversion of injected
        channels</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>JEXTEN</name>
        <description>External trigger enable for injected
        channels</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>JEXTSEL</name>
        <description>External event select for injected
        group</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>ALIGN</name>
        <description>Data alignment</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>EOCS</name>
        <description>End of conversion
        selection</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DDS</name>
        <description>DMA disable selection (for single ADC
        mode)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMA</name>
        <description>Direct memory access mode (for single
        ADC mode)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CONT</name>
        <description>Continuous conversion</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADON</name>
        <description>A/D Converter ON / OFF</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SMPR1</name>
    <displayName>SMPR1</displayName>
    <description>sample time register 1</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SMPx_x</name>
        <description>Sample time bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SMPR2</name>
    <displayName>SMPR2</displayName>
    <description>sample time register 2</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SMPx_x</name>
        <description>Sample time bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JOFR1</name>
    <displayName>JOFR1</displayName>
    <description>injected channel data offset register
    x</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JOFFSET1</name>
        <description>Data offset for injected channel
        x</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JOFR2</name>
    <displayName>JOFR2</displayName>
    <description>injected channel data offset register
    x</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JOFFSET2</name>
        <description>Data offset for injected channel
        x</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JOFR3</name>
    <displayName>JOFR3</displayName>
    <description>injected channel data offset register
    x</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JOFFSET3</name>
        <description>Data offset for injected channel
        x</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JOFR4</name>
    <displayName>JOFR4</displayName>
    <description>injected channel data offset register
    x</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JOFFSET4</name>
        <description>Data offset for injected channel
        x</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>HTR</name>
    <displayName>HTR</displayName>
    <description>watchdog higher threshold
    register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000FFF</resetValue>
    <fields>
      <field>
        <name>HT</name>
        <description>Analog watchdog higher
        threshold</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>LTR</name>
    <displayName>LTR</displayName>
    <description>watchdog lower threshold
    register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LT</name>
        <description>Analog watchdog lower
        threshold</description>
        <bitOffset>0</bitOffset>
        <bitWidth>12</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SQR1</name>
    <displayName>SQR1</displayName>
    <description>regular sequence register 1</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>L</name>
        <description>Regular channel sequence
        length</description>
        <bitOffset>20</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>SQ16</name>
        <description>16th conversion in regular
        sequence</description>
        <bitOffset>15</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ15</name>
        <description>15th conversion in regular
        sequence</description>
        <bitOffset>10</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ14</name>
        <description>14th conversion in regular
        sequence</description>
        <bitOffset>5</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ13</name>
        <description>13th conversion in regular
        sequence</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SQR2</name>
    <displayName>SQR2</displayName>
    <description>regular sequence register 2</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SQ12</name>
        <description>12th conversion in regular
        sequence</description>
        <bitOffset>25</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ11</name>
        <description>11th conversion in regular
        sequence</description>
        <bitOffset>20</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ10</name>
        <description>10th conversion in regular
        sequence</description>
        <bitOffset>15</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ9</name>
        <description>9th conversion in regular
        sequence</description>
        <bitOffset>10</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ8</name>
        <description>8th conversion in regular
        sequence</description>
        <bitOffset>5</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ7</name>
        <description>7th conversion in regular
        sequence</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SQR3</name>
    <displayName>SQR3</displayName>
    <description>regular sequence register 3</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SQ6</name>
        <description>6th conversion in regular
        sequence</description>
        <bitOffset>25</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ5</name>
        <description>5th conversion in regular
        sequence</description>
        <bitOffset>20</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ4</name>
        <description>4th conversion in regular
        sequence</description>
        <bitOffset>15</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ3</name>
        <description>3rd conversion in regular
        sequence</description>
        <bitOffset>10</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ2</name>
        <description>2nd conversion in regular
        sequence</description>
        <bitOffset>5</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>SQ1</name>
        <description>1st conversion in regular
        sequence</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JSQR</name>
    <displayName>JSQR</displayName>
    <description>injected sequence register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JL</name>
        <description>Injected sequence length</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>JSQ4</name>
        <description>4th conversion in injected
        sequence</description>
        <bitOffset>15</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>JSQ3</name>
        <description>3rd conversion in injected
        sequence</description>
        <bitOffset>10</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>JSQ2</name>
        <description>2nd conversion in injected
        sequence</description>
        <bitOffset>5</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
      <field>
        <name>JSQ1</name>
        <description>1st conversion in injected
        sequence</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JDR1</name>
    <displayName>JDR1</displayName>
    <description>injected data register x</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JDATA</name>
        <description>Injected data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JDR2</name>
    <displayName>JDR2</displayName>
    <description>injected data register x</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JDATA</name>
        <description>Injected data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JDR3</name>
    <displayName>JDR3</displayName>
    <description>injected data register x</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JDATA</name>
        <description>Injected data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>JDR4</name>
    <displayName>JDR4</displayName>
    <description>injected data register x</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>JDATA</name>
        <description>Injected data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>regular data register</description>
    <addressOffset>0x4C</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA</name>
        <description>Regular data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
</registers>

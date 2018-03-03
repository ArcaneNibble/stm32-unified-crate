<description>Serial audio interface</description>
<groupName>SAI</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>BCR1</name>
    <displayName>BCR1</displayName>
    <description>BConfiguration register 1</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000040</resetValue>
    <fields>
      <field>
        <name>MCJDIV</name>
        <description>Master clock divider</description>
        <bitOffset>20</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>NODIV</name>
        <description>No divider</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAEN</name>
        <description>DMA enable</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SAIBEN</name>
        <description>Audio block B enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OutDri</name>
        <description>Output drive</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MONO</name>
        <description>Mono mode</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SYNCEN</name>
        <description>Synchronization enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CKSTR</name>
        <description>Clock strobing edge</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSBFIRST</name>
        <description>Least significant bit
        first</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DS</name>
        <description>Data size</description>
        <bitOffset>5</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>PRTCFG</name>
        <description>Protocol configuration</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MODE</name>
        <description>Audio block mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BCR2</name>
    <displayName>BCR2</displayName>
    <description>BConfiguration register 2</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>COMP</name>
        <description>Companding mode</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CPL</name>
        <description>Complement bit</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTECN</name>
        <description>Mute counter</description>
        <bitOffset>7</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>MUTEVAL</name>
        <description>Mute value</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTE</name>
        <description>Mute</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TRIS</name>
        <description>Tristate management on data
        line</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFLUS</name>
        <description>FIFO flush</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BFRCR</name>
    <displayName>BFRCR</displayName>
    <description>BFRCR</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000007</resetValue>
    <fields>
      <field>
        <name>FSOFF</name>
        <description>Frame synchronization
        offset</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSPOL</name>
        <description>Frame synchronization
        polarity</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSDEF</name>
        <description>Frame synchronization
        definition</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSALL</name>
        <description>Frame synchronization active level
        length</description>
        <bitOffset>8</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>FRL</name>
        <description>Frame length</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BSLOTR</name>
    <displayName>BSLOTR</displayName>
    <description>BSlot register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SLOTEN</name>
        <description>Slot enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>NBSLOT</name>
        <description>Number of slots in an audio
        frame</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>SLOTSZ</name>
        <description>Slot size</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>FBOFF</name>
        <description>First bit offset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BIM</name>
    <displayName>BIM</displayName>
    <description>BInterrupt mask register2</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LFSDETIE</name>
        <description>Late frame synchronization detection
        interrupt enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AFSDETIE</name>
        <description>Anticipated frame synchronization
        detection interrupt enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CNRDYIE</name>
        <description>Codec not ready interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FREQIE</name>
        <description>FIFO request interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WCKCFG</name>
        <description>Wrong clock configuration interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTEDET</name>
        <description>Mute detection interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVRUDRIE</name>
        <description>Overrun/underrun interrupt
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BSR</name>
    <displayName>BSR</displayName>
    <description>BStatus register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FLVL</name>
        <description>FIFO level threshold</description>
        <bitOffset>16</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>LFSDET</name>
        <description>Late frame synchronization
        detection</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AFSDET</name>
        <description>Anticipated frame synchronization
        detection</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CNRDY</name>
        <description>Codec not ready</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FREQ</name>
        <description>FIFO request</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WCKCFG</name>
        <description>Wrong clock configuration
        flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTEDET</name>
        <description>Mute detection</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVRUDR</name>
        <description>Overrun / underrun</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BCLRFR</name>
    <displayName>BCLRFR</displayName>
    <description>BClear flag register</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LFSDET</name>
        <description>Clear late frame synchronization
        detection flag</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAFSDET</name>
        <description>Clear anticipated frame synchronization
        detection flag</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CNRDY</name>
        <description>Clear codec not ready flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WCKCFG</name>
        <description>Clear wrong clock configuration
        flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTEDET</name>
        <description>Mute detection flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVRUDR</name>
        <description>Clear overrun / underrun</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BDR</name>
    <displayName>BDR</displayName>
    <description>BData register</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA</name>
        <description>Data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ACR1</name>
    <displayName>ACR1</displayName>
    <description>AConfiguration register 1</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000040</resetValue>
    <fields>
      <field>
        <name>MCJDIV</name>
        <description>Master clock divider</description>
        <bitOffset>20</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>NODIV</name>
        <description>No divider</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMAEN</name>
        <description>DMA enable</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SAIAEN</name>
        <description>Audio block A enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OutDri</name>
        <description>Output drive</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MONO</name>
        <description>Mono mode</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SYNCEN</name>
        <description>Synchronization enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CKSTR</name>
        <description>Clock strobing edge</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LSBFIRST</name>
        <description>Least significant bit
        first</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DS</name>
        <description>Data size</description>
        <bitOffset>5</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>PRTCFG</name>
        <description>Protocol configuration</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>MODE</name>
        <description>Audio block mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ACR2</name>
    <displayName>ACR2</displayName>
    <description>AConfiguration register 2</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>COMP</name>
        <description>Companding mode</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>CPL</name>
        <description>Complement bit</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTECN</name>
        <description>Mute counter</description>
        <bitOffset>7</bitOffset>
        <bitWidth>6</bitWidth>
      </field>
      <field>
        <name>MUTEVAL</name>
        <description>Mute value</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTE</name>
        <description>Mute</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TRIS</name>
        <description>Tristate management on data
        line</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FFLUS</name>
        <description>FIFO flush</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FTH</name>
        <description>FIFO threshold</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AFRCR</name>
    <displayName>AFRCR</displayName>
    <description>AFRCR</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000007</resetValue>
    <fields>
      <field>
        <name>FSOFF</name>
        <description>Frame synchronization
        offset</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSPOL</name>
        <description>Frame synchronization
        polarity</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSDEF</name>
        <description>Frame synchronization
        definition</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FSALL</name>
        <description>Frame synchronization active level
        length</description>
        <bitOffset>8</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>FRL</name>
        <description>Frame length</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ASLOTR</name>
    <displayName>ASLOTR</displayName>
    <description>ASlot register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SLOTEN</name>
        <description>Slot enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
      <field>
        <name>NBSLOT</name>
        <description>Number of slots in an audio
        frame</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>SLOTSZ</name>
        <description>Slot size</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>FBOFF</name>
        <description>First bit offset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AIM</name>
    <displayName>AIM</displayName>
    <description>AInterrupt mask register2</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LFSDET</name>
        <description>Late frame synchronization detection
        interrupt enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AFSDETIE</name>
        <description>Anticipated frame synchronization
        detection interrupt enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CNRDYIE</name>
        <description>Codec not ready interrupt
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FREQIE</name>
        <description>FIFO request interrupt
        enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WCKCFG</name>
        <description>Wrong clock configuration interrupt
        enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTEDET</name>
        <description>Mute detection interrupt
        enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVRUDRIE</name>
        <description>Overrun/underrun interrupt
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ASR</name>
    <displayName>ASR</displayName>
    <description>AStatus register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FLVL</name>
        <description>FIFO level threshold</description>
        <bitOffset>16</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>LFSDET</name>
        <description>Late frame synchronization
        detection</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>AFSDET</name>
        <description>Anticipated frame synchronization
        detection</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CNRDY</name>
        <description>Codec not ready</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FREQ</name>
        <description>FIFO request</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WCKCFG</name>
        <description>Wrong clock configuration flag. This bit
        is read only.</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTEDET</name>
        <description>Mute detection</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVRUDR</name>
        <description>Overrun / underrun</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ACLRFR</name>
    <displayName>ACLRFR</displayName>
    <description>AClear flag register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LFSDET</name>
        <description>Clear late frame synchronization
        detection flag</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAFSDET</name>
        <description>Clear anticipated frame synchronization
        detection flag.</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CNRDY</name>
        <description>Clear codec not ready flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WCKCFG</name>
        <description>Clear wrong clock configuration
        flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MUTEDET</name>
        <description>Mute detection flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OVRUDR</name>
        <description>Clear overrun / underrun</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ADR</name>
    <displayName>ADR</displayName>
    <description>AData register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DATA</name>
        <description>Data</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>

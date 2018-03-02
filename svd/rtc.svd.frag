<description>Real-time clock</description>
<groupName>RTC</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>TR</name>
    <displayName>TR</displayName>
    <description>time register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PM</name>
        <description>AM/PM notation</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HT</name>
        <description>Hour tens in BCD format</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>HU</name>
        <description>Hour units in BCD format</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MNT</name>
        <description>Minute tens in BCD format</description>
        <bitOffset>12</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MNU</name>
        <description>Minute units in BCD format</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>ST</name>
        <description>Second tens in BCD format</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>SU</name>
        <description>Second units in BCD format</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>DR</name>
    <displayName>DR</displayName>
    <description>date register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00002101</resetValue>
    <fields>
      <field>
        <name>YT</name>
        <description>Year tens in BCD format</description>
        <bitOffset>20</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>YU</name>
        <description>Year units in BCD format</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>WDU</name>
        <description>Week day units</description>
        <bitOffset>13</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MT</name>
        <description>Month tens in BCD format</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MU</name>
        <description>Month units in BCD format</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>DT</name>
        <description>Date tens in BCD format</description>
        <bitOffset>4</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DU</name>
        <description>Date units in BCD format</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>control register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>COE</name>
        <description>Calibration output enable</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OSEL</name>
        <description>Output selection</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>POL</name>
        <description>Output polarity</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>BKP</name>
        <description>Backup</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SUB1H</name>
        <description>Subtract 1 hour (winter time
        change)</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADD1H</name>
        <description>Add 1 hour (summer time
        change)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSIE</name>
        <description>Time-stamp interrupt
        enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WUTIE</name>
        <description>Wakeup timer interrupt
        enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ALRBIE</name>
        <description>Alarm B interrupt enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ALRAIE</name>
        <description>Alarm A interrupt enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSE</name>
        <description>Time stamp enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WUTE</name>
        <description>Wakeup timer enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ALRBE</name>
        <description>Alarm B enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ALRAE</name>
        <description>Alarm A enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DCE</name>
        <description>Coarse digital calibration
        enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>FMT</name>
        <description>Hour format</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>REFCKON</name>
        <description>Reference clock detection enable (50 or
        60 Hz)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSEDGE</name>
        <description>Time-stamp event active
        edge</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WCKSEL</name>
        <description>Wakeup clock selection</description>
        <bitOffset>0</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ISR</name>
    <displayName>ISR</displayName>
    <description>initialization and status
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000007</resetValue>
    <fields>
      <field>
        <name>ALRAWF</name>
        <description>Alarm A write flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ALRBWF</name>
        <description>Alarm B write flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>WUTWF</name>
        <description>Wakeup timer write flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SHPF</name>
        <description>Shift operation pending</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INITS</name>
        <description>Initialization status flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>RSF</name>
        <description>Registers synchronization
        flag</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>INITF</name>
        <description>Initialization flag</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>INIT</name>
        <description>Initialization mode</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ALRAF</name>
        <description>Alarm A flag</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>ALRBF</name>
        <description>Alarm B flag</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>WUTF</name>
        <description>Wakeup timer flag</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TSF</name>
        <description>Time-stamp flag</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TSOVF</name>
        <description>Time-stamp overflow flag</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TAMP1F</name>
        <description>Tamper detection flag</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>TAMP2F</name>
        <description>TAMPER2 detection flag</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RECALPF</name>
        <description>Recalibration pending Flag</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>PRER</name>
    <displayName>PRER</displayName>
    <description>prescaler register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x007F00FF</resetValue>
    <fields>
      <field>
        <name>PREDIV_A</name>
        <description>Asynchronous prescaler
        factor</description>
        <bitOffset>16</bitOffset>
        <bitWidth>7</bitWidth>
      </field>
      <field>
        <name>PREDIV_S</name>
        <description>Synchronous prescaler
        factor</description>
        <bitOffset>0</bitOffset>
        <bitWidth>15</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>WUTR</name>
    <displayName>WUTR</displayName>
    <description>wakeup timer register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x0000FFFF</resetValue>
    <fields>
      <field>
        <name>WUT</name>
        <description>Wakeup auto-reload value
        bits</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CALIBR</name>
    <displayName>CALIBR</displayName>
    <description>calibration register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DCS</name>
        <description>Digital calibration sign</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DC</name>
        <description>Digital calibration</description>
        <bitOffset>0</bitOffset>
        <bitWidth>5</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ALRMAR</name>
    <displayName>ALRMAR</displayName>
    <description>alarm A register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MSK4</name>
        <description>Alarm A date mask</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WDSEL</name>
        <description>Week day selection</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DT</name>
        <description>Date tens in BCD format</description>
        <bitOffset>28</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DU</name>
        <description>Date units or day in BCD
        format</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MSK3</name>
        <description>Alarm A hours mask</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PM</name>
        <description>AM/PM notation</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HT</name>
        <description>Hour tens in BCD format</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>HU</name>
        <description>Hour units in BCD format</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MSK2</name>
        <description>Alarm A minutes mask</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MNT</name>
        <description>Minute tens in BCD format</description>
        <bitOffset>12</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MNU</name>
        <description>Minute units in BCD format</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MSK1</name>
        <description>Alarm A seconds mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ST</name>
        <description>Second tens in BCD format</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>SU</name>
        <description>Second units in BCD format</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ALRMBR</name>
    <displayName>ALRMBR</displayName>
    <description>alarm B register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MSK4</name>
        <description>Alarm B date mask</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WDSEL</name>
        <description>Week day selection</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DT</name>
        <description>Date tens in BCD format</description>
        <bitOffset>28</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DU</name>
        <description>Date units or day in BCD
        format</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MSK3</name>
        <description>Alarm B hours mask</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PM</name>
        <description>AM/PM notation</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>HT</name>
        <description>Hour tens in BCD format</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>HU</name>
        <description>Hour units in BCD format</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MSK2</name>
        <description>Alarm B minutes mask</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MNT</name>
        <description>Minute tens in BCD format</description>
        <bitOffset>12</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MNU</name>
        <description>Minute units in BCD format</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>MSK1</name>
        <description>Alarm B seconds mask</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ST</name>
        <description>Second tens in BCD format</description>
        <bitOffset>4</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>SU</name>
        <description>Second units in BCD format</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>WPR</name>
    <displayName>WPR</displayName>
    <description>write protection register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>KEY</name>
        <description>Write protection key</description>
        <bitOffset>0</bitOffset>
        <bitWidth>8</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SSR</name>
    <displayName>SSR</displayName>
    <description>sub second register</description>
    <addressOffset>0x28</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SS</name>
        <description>Sub second value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SHIFTR</name>
    <displayName>SHIFTR</displayName>
    <description>shift control register</description>
    <addressOffset>0x2C</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>ADD1S</name>
        <description>Add one second</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SUBFS</name>
        <description>Subtract a fraction of a
        second</description>
        <bitOffset>0</bitOffset>
        <bitWidth>15</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TSTR</name>
    <displayName>TSTR</displayName>
    <description>time stamp time register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>ALARMOUTTYPE</name>
        <description>AFO_ALARM output type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSINSEL</name>
        <description>TIMESTAMP mapping</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP1INSEL</name>
        <description>TAMPER1 mapping</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMPIE</name>
        <description>Tamper interrupt enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP1TRG</name>
        <description>Active level for tamper 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP1E</name>
        <description>Tamper 1 detection enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TSDR</name>
    <displayName>TSDR</displayName>
    <description>time stamp date register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>WDU</name>
        <description>Week day units</description>
        <bitOffset>13</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>MT</name>
        <description>Month tens in BCD format</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MU</name>
        <description>Month units in BCD format</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>DT</name>
        <description>Date tens in BCD format</description>
        <bitOffset>4</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>DU</name>
        <description>Date units in BCD format</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TSSSR</name>
    <displayName>TSSSR</displayName>
    <description>timestamp sub second register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SS</name>
        <description>Sub second value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>16</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CALR</name>
    <displayName>CALR</displayName>
    <description>calibration register</description>
    <addressOffset>0x3C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CALP</name>
        <description>Increase frequency of RTC by 488.5
        ppm</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CALW8</name>
        <description>Use an 8-second calibration cycle
        period</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CALW16</name>
        <description>Use a 16-second calibration cycle
        period</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CALM</name>
        <description>Calibration minus</description>
        <bitOffset>0</bitOffset>
        <bitWidth>9</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>TAFCR</name>
    <displayName>TAFCR</displayName>
    <description>tamper and alternate function configuration
    register</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>ALARMOUTTYPE</name>
        <description>AFO_ALARM output type</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TSINSEL</name>
        <description>TIMESTAMP mapping</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP1INSEL</name>
        <description>TAMPER1 mapping</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMPPUDIS</name>
        <description>TAMPER pull-up disable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMPPRCH</name>
        <description>Tamper precharge duration</description>
        <bitOffset>13</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>TAMPFLT</name>
        <description>Tamper filter count</description>
        <bitOffset>11</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>TAMPFREQ</name>
        <description>Tamper sampling frequency</description>
        <bitOffset>8</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>TAMPTS</name>
        <description>Activate timestamp on tamper detection
        event</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP2TRG</name>
        <description>Active level for tamper 2</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP2E</name>
        <description>Tamper 2 detection enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMPIE</name>
        <description>Tamper interrupt enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP1TRG</name>
        <description>Active level for tamper 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TAMP1E</name>
        <description>Tamper 1 detection enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ALRMASSR</name>
    <displayName>ALRMASSR</displayName>
    <description>alarm A sub second register</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MASKSS</name>
        <description>Mask the most-significant bits starting
        at this bit</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>SS</name>
        <description>Sub seconds value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>15</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ALRMBSSR</name>
    <displayName>ALRMBSSR</displayName>
    <description>alarm B sub second register</description>
    <addressOffset>0x48</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MASKSS</name>
        <description>Mask the most-significant bits starting
        at this bit</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>SS</name>
        <description>Sub seconds value</description>
        <bitOffset>0</bitOffset>
        <bitWidth>15</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP0R</name>
    <displayName>BKP0R</displayName>
    <description>backup register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP1R</name>
    <displayName>BKP1R</displayName>
    <description>backup register</description>
    <addressOffset>0x54</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP2R</name>
    <displayName>BKP2R</displayName>
    <description>backup register</description>
    <addressOffset>0x58</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP3R</name>
    <displayName>BKP3R</displayName>
    <description>backup register</description>
    <addressOffset>0x5C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP4R</name>
    <displayName>BKP4R</displayName>
    <description>backup register</description>
    <addressOffset>0x60</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP5R</name>
    <displayName>BKP5R</displayName>
    <description>backup register</description>
    <addressOffset>0x64</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP6R</name>
    <displayName>BKP6R</displayName>
    <description>backup register</description>
    <addressOffset>0x68</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP7R</name>
    <displayName>BKP7R</displayName>
    <description>backup register</description>
    <addressOffset>0x6C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP8R</name>
    <displayName>BKP8R</displayName>
    <description>backup register</description>
    <addressOffset>0x70</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP9R</name>
    <displayName>BKP9R</displayName>
    <description>backup register</description>
    <addressOffset>0x74</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP10R</name>
    <displayName>BKP10R</displayName>
    <description>backup register</description>
    <addressOffset>0x78</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP11R</name>
    <displayName>BKP11R</displayName>
    <description>backup register</description>
    <addressOffset>0x7C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP12R</name>
    <displayName>BKP12R</displayName>
    <description>backup register</description>
    <addressOffset>0x80</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP13R</name>
    <displayName>BKP13R</displayName>
    <description>backup register</description>
    <addressOffset>0x84</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP14R</name>
    <displayName>BKP14R</displayName>
    <description>backup register</description>
    <addressOffset>0x88</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP15R</name>
    <displayName>BKP15R</displayName>
    <description>backup register</description>
    <addressOffset>0x8C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP16R</name>
    <displayName>BKP16R</displayName>
    <description>backup register</description>
    <addressOffset>0x90</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP17R</name>
    <displayName>BKP17R</displayName>
    <description>backup register</description>
    <addressOffset>0x94</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP18R</name>
    <displayName>BKP18R</displayName>
    <description>backup register</description>
    <addressOffset>0x98</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BKP19R</name>
    <displayName>BKP19R</displayName>
    <description>backup register</description>
    <addressOffset>0x9C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BKP</name>
        <description>BKP</description>
        <bitOffset>0</bitOffset>
        <bitWidth>32</bitWidth>
      </field>
    </fields>
  </register>
</registers>

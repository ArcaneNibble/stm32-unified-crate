<description>Power control</description>
<groupName>PWR</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>power control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FPDS</name>
        <description>Flash power down in Stop
        mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DBP</name>
        <description>Disable backup domain write
        protection</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLS</name>
        <description>PVD level selection</description>
        <bitOffset>5</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>PVDE</name>
        <description>Power voltage detector
        enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CSBF</name>
        <description>Clear standby flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CWUF</name>
        <description>Clear wakeup flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PDDS</name>
        <description>Power down deepsleep</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LPDS</name>
        <description>Low-power deep sleep</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
#if defined(STM32F427)
      <field>
        <name>LPUDS</name>
        <description>Low-Power Regulator Low Voltage in
        deepsleep</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MRUDS</name>
        <description>Main regulator low voltage in deepsleep
        mode</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>VOS</name>
        <description>Regulator voltage scaling output
        selection</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>ODEN</name>
        <description>Over-drive enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODSWEN</name>
        <description>Over-drive switching
        enabled</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UDEN</name>
        <description>Under-drive enable in stop
        mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
#endif
    </fields>
  </register>
  <register>
    <name>CSR</name>
    <displayName>CSR</displayName>
    <description>power control/status register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>WUF</name>
        <description>Wakeup flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SBF</name>
        <description>Standby flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PVDO</name>
        <description>PVD output</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>BRR</name>
        <description>Backup regulator ready</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>EWUP</name>
        <description>Enable WKUP pin</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BRE</name>
        <description>Backup regulator enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>VOSRDY</name>
        <description>Regulator voltage scaling output
        selection ready bit</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
#if defined(STM32F427)
      <field>
        <name>ODRDY</name>
        <description>Over-drive mode ready</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>ODSWRDY</name>
        <description>Over-drive mode switching
        ready</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>UDRDY</name>
        <description>Under-drive ready flag</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
#endif
    </fields>
  </register>
</registers>

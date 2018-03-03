<description>Reset and clock control</description>
<groupName>RCC</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>CR</name>
    <displayName>CR</displayName>
    <description>clock control register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000083</resetValue>
    <fields>
      <field>
        <name>PLLI2SRDY</name>
        <description>PLLI2S clock ready flag</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PLLI2SON</name>
        <description>PLLI2S enable</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PLLRDY</name>
        <description>Main PLL (PLL) clock ready
        flag</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PLLON</name>
        <description>Main PLL (PLL) enable</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CSSON</name>
        <description>Clock security system
        enable</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSEBYP</name>
        <description>HSE clock bypass</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSERDY</name>
        <description>HSE clock ready flag</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HSEON</name>
        <description>HSE clock enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSICAL</name>
        <description>Internal high-speed clock
        calibration</description>
        <bitOffset>8</bitOffset>
        <bitWidth>8</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HSITRIM</name>
        <description>Internal high-speed clock
        trimming</description>
        <bitOffset>3</bitOffset>
        <bitWidth>5</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSIRDY</name>
        <description>Internal high-speed clock ready
        flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HSION</name>
        <description>Internal high-speed clock
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>PLLCFGR</name>
    <displayName>PLLCFGR</displayName>
    <description>PLL configuration register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x24003010</resetValue>
    <fields>
      <field>
        <name>PLLQ3</name>
        <description>Main PLL (PLL) division factor for USB
        OTG FS, SDIO and random number generator
        clocks</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLQ2</name>
        <description>Main PLL (PLL) division factor for USB
        OTG FS, SDIO and random number generator
        clocks</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLQ1</name>
        <description>Main PLL (PLL) division factor for USB
        OTG FS, SDIO and random number generator
        clocks</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLQ0</name>
        <description>Main PLL (PLL) division factor for USB
        OTG FS, SDIO and random number generator
        clocks</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLSRC</name>
        <description>Main PLL(PLL) and audio PLL (PLLI2S)
        entry clock source</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLP1</name>
        <description>Main PLL (PLL) division factor for main
        system clock</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLP0</name>
        <description>Main PLL (PLL) division factor for main
        system clock</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN8</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN7</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN6</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN5</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN4</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN3</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN2</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN1</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLN0</name>
        <description>Main PLL (PLL) multiplication factor for
        VCO</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLM5</name>
        <description>Division factor for the main PLL (PLL)
        and audio PLL (PLLI2S) input clock</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLM4</name>
        <description>Division factor for the main PLL (PLL)
        and audio PLL (PLLI2S) input clock</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLM3</name>
        <description>Division factor for the main PLL (PLL)
        and audio PLL (PLLI2S) input clock</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLM2</name>
        <description>Division factor for the main PLL (PLL)
        and audio PLL (PLLI2S) input clock</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLM1</name>
        <description>Division factor for the main PLL (PLL)
        and audio PLL (PLLI2S) input clock</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PLLM0</name>
        <description>Division factor for the main PLL (PLL)
        and audio PLL (PLLI2S) input clock</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>CFGR</name>
    <displayName>CFGR</displayName>
    <description>clock configuration register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MCO2</name>
        <description>Microcontroller clock output
        2</description>
        <bitOffset>30</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>MCO2PRE</name>
        <description>MCO2 prescaler</description>
        <bitOffset>27</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>MCO1PRE</name>
        <description>MCO1 prescaler</description>
        <bitOffset>24</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>I2SSRC</name>
        <description>I2S clock selection</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>MCO1</name>
        <description>Microcontroller clock output
        1</description>
        <bitOffset>21</bitOffset>
        <bitWidth>2</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RTCPRE</name>
        <description>HSE division factor for RTC
        clock</description>
        <bitOffset>16</bitOffset>
        <bitWidth>5</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PPRE2</name>
        <description>APB high-speed prescaler
        (APB2)</description>
        <bitOffset>13</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PPRE1</name>
        <description>APB Low speed prescaler
        (APB1)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>3</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HPRE</name>
        <description>AHB prescaler</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SWS1</name>
        <description>System clock switch status</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SWS0</name>
        <description>System clock switch status</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>SW1</name>
        <description>System clock switch</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SW0</name>
        <description>System clock switch</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>CIR</name>
    <displayName>CIR</displayName>
    <description>clock interrupt register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>CSSC</name>
        <description>Clock security system interrupt
        clear</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>PLLI2SRDYC</name>
        <description>PLLI2S ready interrupt
        clear</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>PLLRDYC</name>
        <description>Main PLL(PLL) ready interrupt
        clear</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>HSERDYC</name>
        <description>HSE ready interrupt clear</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>HSIRDYC</name>
        <description>HSI ready interrupt clear</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>LSERDYC</name>
        <description>LSE ready interrupt clear</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>LSIRDYC</name>
        <description>LSI ready interrupt clear</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>write-only</access>
      </field>
      <field>
        <name>PLLI2SRDYIE</name>
        <description>PLLI2S ready interrupt
        enable</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PLLRDYIE</name>
        <description>Main PLL (PLL) ready interrupt
        enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSERDYIE</name>
        <description>HSE ready interrupt enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>HSIRDYIE</name>
        <description>HSI ready interrupt enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>LSERDYIE</name>
        <description>LSE ready interrupt enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>LSIRDYIE</name>
        <description>LSI ready interrupt enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>CSSF</name>
        <description>Clock security system interrupt
        flag</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PLLI2SRDYF</name>
        <description>PLLI2S ready interrupt
        flag</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>PLLRDYF</name>
        <description>Main PLL (PLL) ready interrupt
        flag</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HSERDYF</name>
        <description>HSE ready interrupt flag</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>HSIRDYF</name>
        <description>HSI ready interrupt flag</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LSERDYF</name>
        <description>LSE ready interrupt flag</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LSIRDYF</name>
        <description>LSI ready interrupt flag</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB1RSTR</name>
    <displayName>AHB1RSTR</displayName>
    <description>AHB1 peripheral reset register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OTGHSRST</name>
        <description>USB OTG HS module reset</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ETHMACRST</name>
        <description>Ethernet MAC reset</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMA2RST</name>
        <description>DMA2 reset</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DMA1RST</name>
        <description>DMA2 reset</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CRCRST</name>
        <description>CRC reset</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOIRST</name>
        <description>IO port I reset</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOHRST</name>
        <description>IO port H reset</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOGRST</name>
        <description>IO port G reset</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOFRST</name>
        <description>IO port F reset</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOERST</name>
        <description>IO port E reset</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIODRST</name>
        <description>IO port D reset</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOCRST</name>
        <description>IO port C reset</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOBRST</name>
        <description>IO port B reset</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>GPIOARST</name>
        <description>IO port A reset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB2RSTR</name>
    <displayName>AHB2RSTR</displayName>
    <description>AHB2 peripheral reset register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OTGFSRST</name>
        <description>USB OTG FS module reset</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>RNGRST</name>
        <description>Random number generator module
        reset</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>DCMIRST</name>
        <description>Camera interface reset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB3RSTR</name>
    <displayName>AHB3RSTR</displayName>
    <description>AHB3 peripheral reset register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FSMCRST</name>
        <description>Flexible static memory controller module
        reset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>APB1RSTR</name>
    <displayName>APB1RSTR</displayName>
    <description>APB1 peripheral reset register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACRST</name>
        <description>DAC reset</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PWRRST</name>
        <description>Power interface reset</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAN2RST</name>
        <description>CAN2 reset</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>CAN1RST</name>
        <description>CAN1 reset</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>I2C3RST</name>
        <description>I2C3 reset</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>I2C2RST</name>
        <description>I2C 2 reset</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>I2C1RST</name>
        <description>I2C 1 reset</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UART5RST</name>
        <description>USART 5 reset</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UART4RST</name>
        <description>USART 4 reset</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UART3RST</name>
        <description>USART 3 reset</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>UART2RST</name>
        <description>USART 2 reset</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPI3RST</name>
        <description>SPI 3 reset</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPI2RST</name>
        <description>SPI 2 reset</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>WWDGRST</name>
        <description>Window watchdog reset</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM14RST</name>
        <description>TIM14 reset</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM13RST</name>
        <description>TIM13 reset</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM12RST</name>
        <description>TIM12 reset</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM7RST</name>
        <description>TIM7 reset</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM6RST</name>
        <description>TIM6 reset</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM5RST</name>
        <description>TIM5 reset</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM4RST</name>
        <description>TIM4 reset</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM3RST</name>
        <description>TIM3 reset</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM2RST</name>
        <description>TIM2 reset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>APB2RSTR</name>
    <displayName>APB2RSTR</displayName>
    <description>APB2 peripheral reset register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIM11RST</name>
        <description>TIM11 reset</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM10RST</name>
        <description>TIM10 reset</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM9RST</name>
        <description>TIM9 reset</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SYSCFGRST</name>
        <description>System configuration controller
        reset</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPI1RST</name>
        <description>SPI 1 reset</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SDIORST</name>
        <description>SDIO reset</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ADCRST</name>
        <description>ADC interface reset (common to all
        ADCs)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>USART6RST</name>
        <description>USART6 reset</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>USART1RST</name>
        <description>USART1 reset</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM8RST</name>
        <description>TIM8 reset</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TIM1RST</name>
        <description>TIM1 reset</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB1ENR</name>
    <displayName>AHB1ENR</displayName>
    <description>AHB1 peripheral clock register</description>
    <addressOffset>0x30</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00100000</resetValue>
    <fields>
      <field>
        <name>OTGHSULPIEN</name>
        <description>USB OTG HSULPI clock
        enable</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues>
          <name>ENABLED</name>
          <enumeratedValue>
            <name>Disabled</name>
            <description>Disabled.</description>
            <value>0</value>
          </enumeratedValue>
          <enumeratedValue>
            <name>Enabled</name>
            <description>Enabled.</description>
            <value>1</value>
          </enumeratedValue>
        </enumeratedValues>
      </field>
      <field>
        <name>OTGHSEN</name>
        <description>USB OTG HS clock enable</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACPTPEN</name>
        <description>Ethernet PTP clock enable</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACRXEN</name>
        <description>Ethernet Reception clock
        enable</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACTXEN</name>
        <description>Ethernet Transmission clock
        enable</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACEN</name>
        <description>Ethernet MAC clock enable</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>DMA2EN</name>
        <description>DMA2 clock enable</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>DMA1EN</name>
        <description>DMA1 clock enable</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>BKPSRAMEN</name>
        <description>Backup SRAM interface clock
        enable</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>CRCEN</name>
        <description>CRC clock enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOIEN</name>
        <description>IO port I clock enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOHEN</name>
        <description>IO port H clock enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOGEN</name>
        <description>IO port G clock enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOFEN</name>
        <description>IO port F clock enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOEEN</name>
        <description>IO port E clock enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIODEN</name>
        <description>IO port D clock enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOCEN</name>
        <description>IO port C clock enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOBEN</name>
        <description>IO port B clock enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOAEN</name>
        <description>IO port A clock enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB2ENR</name>
    <displayName>AHB2ENR</displayName>
    <description>AHB2 peripheral clock enable
    register</description>
    <addressOffset>0x34</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OTGFSEN</name>
        <description>USB OTG FS clock enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>RNGEN</name>
        <description>Random number generator clock
        enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>DCMIEN</name>
        <description>Camera interface enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB3ENR</name>
    <displayName>AHB3ENR</displayName>
    <description>AHB3 peripheral clock enable
    register</description>
    <addressOffset>0x38</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>FSMCEN</name>
        <description>Flexible static memory controller module
        clock enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>APB1ENR</name>
    <displayName>APB1ENR</displayName>
    <description>APB1 peripheral clock enable
    register</description>
    <addressOffset>0x40</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>DACEN</name>
        <description>DAC interface clock enable</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>PWREN</name>
        <description>Power interface clock
        enable</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>CAN2EN</name>
        <description>CAN 2 clock enable</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>CAN1EN</name>
        <description>CAN 1 clock enable</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>I2C3EN</name>
        <description>I2C3 clock enable</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>I2C2EN</name>
        <description>I2C2 clock enable</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>I2C1EN</name>
        <description>I2C1 clock enable</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>UART5EN</name>
        <description>UART5 clock enable</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>UART4EN</name>
        <description>UART4 clock enable</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART3EN</name>
        <description>USART3 clock enable</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART2EN</name>
        <description>USART 2 clock enable</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SPI3EN</name>
        <description>SPI3 clock enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SPI2EN</name>
        <description>SPI2 clock enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>WWDGEN</name>
        <description>Window watchdog clock
        enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM14EN</name>
        <description>TIM14 clock enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM13EN</name>
        <description>TIM13 clock enable</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM12EN</name>
        <description>TIM12 clock enable</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM7EN</name>
        <description>TIM7 clock enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM6EN</name>
        <description>TIM6 clock enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM5EN</name>
        <description>TIM5 clock enable</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM4EN</name>
        <description>TIM4 clock enable</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM3EN</name>
        <description>TIM3 clock enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM2EN</name>
        <description>TIM2 clock enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>APB2ENR</name>
    <displayName>APB2ENR</displayName>
    <description>APB2 peripheral clock enable
    register</description>
    <addressOffset>0x44</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TIM11EN</name>
        <description>TIM11 clock enable</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM10EN</name>
        <description>TIM10 clock enable</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM9EN</name>
        <description>TIM9 clock enable</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SYSCFGEN</name>
        <description>System configuration controller clock
        enable</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SPI1EN</name>
        <description>SPI1 clock enable</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SDIOEN</name>
        <description>SDIO clock enable</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ADC3EN</name>
        <description>ADC3 clock enable</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ADC2EN</name>
        <description>ADC2 clock enable</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ADC1EN</name>
        <description>ADC1 clock enable</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART6EN</name>
        <description>USART6 clock enable</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART1EN</name>
        <description>USART1 clock enable</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM8EN</name>
        <description>TIM8 clock enable</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM1EN</name>
        <description>TIM1 clock enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB1LPENR</name>
    <displayName>AHB1LPENR</displayName>
    <description>AHB1 peripheral clock enable in low power
    mode register</description>
    <addressOffset>0x50</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x7E6791FF</resetValue>
    <fields>
      <field>
        <name>OTGHSULPILPEN</name>
        <description>USB OTG HS ULPI clock enable during
        Sleep mode</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>OTGHSLPEN</name>
        <description>USB OTG HS clock enable during Sleep
        mode</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACPTPLPEN</name>
        <description>Ethernet PTP clock enable during Sleep
        mode</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACRXLPEN</name>
        <description>Ethernet reception clock enable during
        Sleep mode</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACTXLPEN</name>
        <description>Ethernet transmission clock enable
        during Sleep mode</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ETHMACLPEN</name>
        <description>Ethernet MAC clock enable during Sleep
        mode</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>DMA2LPEN</name>
        <description>DMA2 clock enable during Sleep
        mode</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>DMA1LPEN</name>
        <description>DMA1 clock enable during Sleep
        mode</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>BKPSRAMLPEN</name>
        <description>Backup SRAM interface clock enable
        during Sleep mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SRAM2LPEN</name>
        <description>SRAM 2 interface clock enable during
        Sleep mode</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SRAM1LPEN</name>
        <description>SRAM 1interface clock enable during
        Sleep mode</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>FLITFLPEN</name>
        <description>Flash interface clock enable during
        Sleep mode</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>CRCLPEN</name>
        <description>CRC clock enable during Sleep
        mode</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOILPEN</name>
        <description>IO port I clock enable during Sleep
        mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOHLPEN</name>
        <description>IO port H clock enable during Sleep
        mode</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOGLPEN</name>
        <description>IO port G clock enable during Sleep
        mode</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOFLPEN</name>
        <description>IO port F clock enable during Sleep
        mode</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOELPEN</name>
        <description>IO port E clock enable during Sleep
        mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIODLPEN</name>
        <description>IO port D clock enable during Sleep
        mode</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOCLPEN</name>
        <description>IO port C clock enable during Sleep
        mode</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOBLPEN</name>
        <description>IO port B clock enable during Sleep
        mode</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>GPIOALPEN</name>
        <description>IO port A clock enable during sleep
        mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB2LPENR</name>
    <displayName>AHB2LPENR</displayName>
    <description>AHB2 peripheral clock enable in low power
    mode register</description>
    <addressOffset>0x54</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x000000F1</resetValue>
    <fields>
      <field>
        <name>OTGFSLPEN</name>
        <description>USB OTG FS clock enable during Sleep
        mode</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>RNGLPEN</name>
        <description>Random number generator clock enable
        during Sleep mode</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>DCMILPEN</name>
        <description>Camera interface enable during Sleep
        mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>AHB3LPENR</name>
    <displayName>AHB3LPENR</displayName>
    <description>AHB3 peripheral clock enable in low power
    mode register</description>
    <addressOffset>0x58</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000001</resetValue>
    <fields>
      <field>
        <name>FSMCLPEN</name>
        <description>Flexible static memory controller module
        clock enable during Sleep mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>APB1LPENR</name>
    <displayName>APB1LPENR</displayName>
    <description>APB1 peripheral clock enable in low power
    mode register</description>
    <addressOffset>0x60</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x36FEC9FF</resetValue>
    <fields>
      <field>
        <name>DACLPEN</name>
        <description>DAC interface clock enable during Sleep
        mode</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>PWRLPEN</name>
        <description>Power interface clock enable during
        Sleep mode</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>CAN2LPEN</name>
        <description>CAN 2 clock enable during Sleep
        mode</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>CAN1LPEN</name>
        <description>CAN 1 clock enable during Sleep
        mode</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>I2C3LPEN</name>
        <description>I2C3 clock enable during Sleep
        mode</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>I2C2LPEN</name>
        <description>I2C2 clock enable during Sleep
        mode</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>I2C1LPEN</name>
        <description>I2C1 clock enable during Sleep
        mode</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>UART5LPEN</name>
        <description>UART5 clock enable during Sleep
        mode</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>UART4LPEN</name>
        <description>UART4 clock enable during Sleep
        mode</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART3LPEN</name>
        <description>USART3 clock enable during Sleep
        mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART2LPEN</name>
        <description>USART2 clock enable during Sleep
        mode</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SPI3LPEN</name>
        <description>SPI3 clock enable during Sleep
        mode</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SPI2LPEN</name>
        <description>SPI2 clock enable during Sleep
        mode</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>WWDGLPEN</name>
        <description>Window watchdog clock enable during
        Sleep mode</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM14LPEN</name>
        <description>TIM14 clock enable during Sleep
        mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM13LPEN</name>
        <description>TIM13 clock enable during Sleep
        mode</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM12LPEN</name>
        <description>TIM12 clock enable during Sleep
        mode</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM7LPEN</name>
        <description>TIM7 clock enable during Sleep
        mode</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM6LPEN</name>
        <description>TIM6 clock enable during Sleep
        mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM5LPEN</name>
        <description>TIM5 clock enable during Sleep
        mode</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM4LPEN</name>
        <description>TIM4 clock enable during Sleep
        mode</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM3LPEN</name>
        <description>TIM3 clock enable during Sleep
        mode</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM2LPEN</name>
        <description>TIM2 clock enable during Sleep
        mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>APB2LPENR</name>
    <displayName>APB2LPENR</displayName>
    <description>APB2 peripheral clock enabled in low power
    mode register</description>
    <addressOffset>0x64</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00075F33</resetValue>
    <fields>
      <field>
        <name>TIM11LPEN</name>
        <description>TIM11 clock enable during Sleep
        mode</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM10LPEN</name>
        <description>TIM10 clock enable during Sleep
        mode</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM9LPEN</name>
        <description>TIM9 clock enable during sleep
        mode</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SYSCFGLPEN</name>
        <description>System configuration controller clock
        enable during Sleep mode</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SPI1LPEN</name>
        <description>SPI 1 clock enable during Sleep
        mode</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>SDIOLPEN</name>
        <description>SDIO clock enable during Sleep
        mode</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ADC3LPEN</name>
        <description>ADC 3 clock enable during Sleep
        mode</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ADC2LPEN</name>
        <description>ADC2 clock enable during Sleep
        mode</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>ADC1LPEN</name>
        <description>ADC1 clock enable during Sleep
        mode</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART6LPEN</name>
        <description>USART6 clock enable during Sleep
        mode</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>USART1LPEN</name>
        <description>USART1 clock enable during Sleep
        mode</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM8LPEN</name>
        <description>TIM8 clock enable during Sleep
        mode</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
      <field>
        <name>TIM1LPEN</name>
        <description>TIM1 clock enable during Sleep
        mode</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="AHB1ENR.OTGHSULPIEN.ENABLED">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>BDCR</name>
    <displayName>BDCR</displayName>
    <description>Backup domain control register</description>
    <addressOffset>0x70</addressOffset>
    <size>0x20</size>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BDRST</name>
        <description>Backup domain software
        reset</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RTCEN</name>
        <description>RTC clock enable</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RTCSEL1</name>
        <description>RTC clock source selection</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RTCSEL0</name>
        <description>RTC clock source selection</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>LSEBYP</name>
        <description>External low-speed oscillator
        bypass</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>LSERDY</name>
        <description>External low-speed oscillator
        ready</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LSEON</name>
        <description>External low-speed oscillator
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>CSR</name>
    <displayName>CSR</displayName>
    <description>clock control &amp; status
    register</description>
    <addressOffset>0x74</addressOffset>
    <size>0x20</size>
    <resetValue>0x0E000000</resetValue>
    <fields>
      <field>
        <name>LPWRRSTF</name>
        <description>Low-power reset flag</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>WWDGRSTF</name>
        <description>Window watchdog reset flag</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>WDGRSTF</name>
        <description>Independent watchdog reset
        flag</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>SFTRSTF</name>
        <description>Software reset flag</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PORRSTF</name>
        <description>POR/PDR reset flag</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>PADRSTF</name>
        <description>PIN reset flag</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>BORRSTF</name>
        <description>BOR reset flag</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>RMVF</name>
        <description>Remove reset flag</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
      <field>
        <name>LSIRDY</name>
        <description>Internal low-speed oscillator
        ready</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-only</access>
      </field>
      <field>
        <name>LSION</name>
        <description>Internal low-speed oscillator
        enable</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <access>read-write</access>
      </field>
    </fields>
  </register>
  <register>
    <name>SSCGR</name>
    <displayName>SSCGR</displayName>
    <description>spread spectrum clock generation
    register</description>
    <addressOffset>0x80</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SSCGEN</name>
        <description>Spread spectrum modulation
        enable</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SPREADSEL</name>
        <description>Spread Select</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>INCSTEP</name>
        <description>Incrementation step</description>
        <bitOffset>13</bitOffset>
        <bitWidth>15</bitWidth>
      </field>
      <field>
        <name>MODPER</name>
        <description>Modulation period</description>
        <bitOffset>0</bitOffset>
        <bitWidth>13</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PLLI2SCFGR</name>
    <displayName>PLLI2SCFGR</displayName>
    <description>PLLI2S configuration register</description>
    <addressOffset>0x84</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x20003000</resetValue>
    <fields>
      <field>
        <name>PLLI2SRx</name>
        <description>PLLI2S division factor for I2S
        clocks</description>
        <bitOffset>28</bitOffset>
        <bitWidth>3</bitWidth>
      </field>
      <field>
        <name>PLLI2SNx</name>
        <description>PLLI2S multiplication factor for
        VCO</description>
        <bitOffset>6</bitOffset>
        <bitWidth>9</bitWidth>
      </field>
    </fields>
  </register>
</registers>

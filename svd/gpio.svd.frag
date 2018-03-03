<description>General-purpose I/Os</description>
<groupName>GPIO</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>MODER</name>
    <displayName>MODER</displayName>
    <description>GPIO port mode register</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
#if defined(__GPIO_A)
    <resetValue>0xA8000000</resetValue>
#elif defined(__GPIO_B)
    <resetValue>0x00000280</resetValue>
#else
    <resetValue>0x00000000</resetValue>
#endif
    <fields>
      <field>
        <name>MODER15</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>30</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues>
          <name>MODE</name>
          <enumeratedValue>
            <name>Input</name>
            <description>Input mode (reset state)</description>
            <value>0</value>
          </enumeratedValue>
          <enumeratedValue>
            <name>Output</name>
            <description>General purpose output mode</description>
            <value>1</value>
          </enumeratedValue>
          <enumeratedValue>
            <name>Alternate</name>
            <description>Alternate function mode</description>
            <value>2</value>
          </enumeratedValue>
          <enumeratedValue>
            <name>Analog</name>
            <description>Analog mode</description>
            <value>3</value>
          </enumeratedValue>
        </enumeratedValues>
      </field>
      <field>
        <name>MODER14</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>28</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER13</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER12</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER11</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER10</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER9</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER8</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER7</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER6</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER5</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER4</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER3</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER2</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER1</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
      <field>
        <name>MODER0</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
        <enumeratedValues derivedFrom="MODE">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>OTYPER</name>
    <displayName>OTYPER</displayName>
    <description>GPIO port output type register</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>OT15</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT14</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT13</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT12</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT11</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT10</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT9</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT8</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT7</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT6</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT5</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT4</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT3</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT2</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT1</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>OT0</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>OSPEEDR</name>
    <displayName>OSPEEDR</displayName>
    <description>GPIO port output speed
    register</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
#if defined(__GPIO_A)
    <!--TODO XXX this does not match between datasheet/svd-->
    <resetValue>0x0C000000</resetValue>
#elif defined(__GPIO_B)
    <resetValue>0x000000C0</resetValue>
#else
    <resetValue>0x00000000</resetValue>
#endif
    <fields>
      <field>
        <name>OSPEEDR15</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>30</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR14</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>28</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR13</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR12</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR11</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR10</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR9</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR8</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR7</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR6</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR5</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR4</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR3</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR2</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR1</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>OSPEEDR0</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PUPDR</name>
    <displayName>PUPDR</displayName>
    <description>GPIO port pull-up/pull-down
    register</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
#if defined(__GPIO_A)
    <resetValue>0x64000000</resetValue>
#elif defined(__GPIO_B)
    <resetValue>0x00000100</resetValue>
#else
    <resetValue>0x00000000</resetValue>
#endif
    <fields>
      <field>
        <name>PUPDR15</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>30</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR14</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>28</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR13</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR12</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR11</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR10</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR9</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR8</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR7</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR6</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR5</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR4</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR3</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR2</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR1</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
      <field>
        <name>PUPDR0</name>
        <description>Port x configuration bits (y =
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>2</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>IDR</name>
    <displayName>IDR</displayName>
    <description>GPIO port input data register</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>IDR15</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR14</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR13</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR12</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR11</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR10</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR9</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR8</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR7</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR6</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR5</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR4</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR3</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR2</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR1</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>IDR0</name>
        <description>Port input data (y =
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>ODR</name>
    <displayName>ODR</displayName>
    <description>GPIO port output data register</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>ODR15</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR14</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR13</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR12</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR11</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR10</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR9</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR8</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR7</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR6</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR5</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR4</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR3</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR2</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR1</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>ODR0</name>
        <description>Port output data (y =
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>BSRR</name>
    <displayName>BSRR</displayName>
    <description>GPIO port bit set/reset
    register</description>
    <addressOffset>0x18</addressOffset>
    <size>0x20</size>
    <access>write-only</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>BR15</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>31</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues>
          <name>RESET</name>
          <usage>write</usage>
          <enumeratedValue>
            <name>Reset</name>
            <description>Resets the corresponding ODRx bit</description>
            <value>1</value>
          </enumeratedValue>
        </enumeratedValues>
      </field>
      <field>
        <name>BR14</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>30</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR13</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>29</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR12</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>28</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR11</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>27</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR10</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>26</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR9</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>25</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR8</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR7</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>23</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR6</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR5</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR4</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR3</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR2</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR1</name>
        <description>Port x reset bit y (y =
        0..15)</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BR0</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="RESET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS15</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues>
          <name>SET</name>
          <usage>write</usage>
          <enumeratedValue>
            <name>Set</name>
            <description>Sets the corresponding ODRx bit</description>
            <value>1</value>
          </enumeratedValue>
        </enumeratedValues>
      </field>
      <field>
        <name>BS14</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS13</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS12</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS11</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS10</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS9</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS8</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS7</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS6</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS5</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS4</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS3</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS2</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS1</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
      <field>
        <name>BS0</name>
        <description>Port x set bit y (y=
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
        <enumeratedValues derivedFrom="SET">
        </enumeratedValues>
      </field>
    </fields>
  </register>
  <register>
    <name>LCKR</name>
    <displayName>LCKR</displayName>
    <description>GPIO port configuration lock
    register</description>
    <addressOffset>0x1C</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>LCKK</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK15</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK14</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK13</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK12</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK11</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK10</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK9</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK8</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK7</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK6</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK5</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK4</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK3</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK2</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK1</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>LCK0</name>
        <description>Port x lock bit y (y=
        0..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AFRL</name>
    <displayName>AFRL</displayName>
    <description>GPIO alternate function low
    register</description>
    <addressOffset>0x20</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>AFRL7</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>28</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRL6</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRL5</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRL4</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRL3</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRL2</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRL1</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRL0</name>
        <description>Alternate function selection for port x
        bit y (y = 0..7)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>AFRH</name>
    <displayName>AFRH</displayName>
    <description>GPIO alternate function high
    register</description>
    <addressOffset>0x24</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>AFRH15</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>28</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRH14</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>24</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRH13</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>20</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRH12</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>16</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRH11</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>12</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRH10</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>8</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRH9</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>4</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
      <field>
        <name>AFRH8</name>
        <description>Alternate function selection for port x
        bit y (y = 8..15)</description>
        <bitOffset>0</bitOffset>
        <bitWidth>4</bitWidth>
      </field>
    </fields>
  </register>
</registers>
#undef __GPIO_A
#undef __GPIO_B

import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  explanationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  explanation: {
    alignSelf: 'flex-start',
    color: '#595959',
    textAlign: 'left',
    fontSize: 18,
    fontFamily: 'Ubuntu-R',
  },
  icon: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 60,
    //color: '#fff',
    padding: 12,
    backgroundColor: '#7dc6b6',
  },
});

const ALIGNMENT = {left: 'flex-start', right: 'flex-end'};

interface IconTextBoxProps {
  children: ReactNode;
  name: string;
  align?: 'left' | 'right';
  size?: number;
  color?: string;
}

export const IconTextBox: React.FC<IconTextBoxProps> = ({
  children,
  name,
  align = 'left',
  size = 40,
  color = 'white',
}) => {
  const left = (
    <View style={styles.explanationRow}>
      <Icon name={name} size={size} color={color} style={styles.icon} />
      <Text style={styles.explanation}>{children}</Text>
    </View>
  );

  const right = (
    <View style={styles.explanationRow}>
      <Text style={styles.explanation}>{children}</Text>
      <Icon name={name} size={size} color={color} style={styles.icon} />
    </View>
  );

  const component = align === 'left' ? left : right;

  return component;
};
